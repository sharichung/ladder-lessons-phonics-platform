import { createContext, useContext, useState, useEffect } from 'react'
import { 
  subscriptionPlans, 
  subscriptionStatus, 
  getPlanById, 
  canAccessGroup, 
  hasFeature,
  createCheckoutSession,
  createCustomerPortalSession,
  cancelSubscription
} from '../data/subscriptionPlans'

const SubscriptionContext = createContext()

export const useSubscription = () => {
  const context = useContext(SubscriptionContext)
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
}

export const SubscriptionProvider = ({ children }) => {
  // Subscription state
  const [currentPlan, setCurrentPlan] = useState('free')
  const [subscriptionStatus, setSubscriptionStatus] = useState('active')
  const [customerId, setCustomerId] = useState(null)
  const [subscriptionId, setSubscriptionId] = useState(null)
  const [billingCycleEnd, setBillingCycleEnd] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Initialize subscription data (in real app, this would fetch from backend)
  useEffect(() => {
    loadSubscriptionData()
  }, [])

  const loadSubscriptionData = async () => {
    try {
      setLoading(true)
      // In a real implementation, this would fetch from your backend/Firebase
      // For demo purposes, we'll use localStorage to simulate persistence
      const savedPlan = localStorage.getItem('userPlan') || 'free'
      const savedStatus = localStorage.getItem('subscriptionStatus') || 'active'
      const savedCustomerId = localStorage.getItem('customerId')
      const savedSubscriptionId = localStorage.getItem('subscriptionId')
      const savedBillingEnd = localStorage.getItem('billingCycleEnd')

      setCurrentPlan(savedPlan)
      setSubscriptionStatus(savedStatus)
      setCustomerId(savedCustomerId)
      setSubscriptionId(savedSubscriptionId)
      setBillingCycleEnd(savedBillingEnd ? new Date(savedBillingEnd) : null)
    } catch (err) {
      setError('Failed to load subscription data')
      console.error('Subscription loading error:', err)
    } finally {
      setLoading(false)
    }
  }

  const updateSubscription = (planId, status = 'active', subId = null, custId = null) => {
    setCurrentPlan(planId)
    setSubscriptionStatus(status)
    if (subId) setSubscriptionId(subId)
    if (custId) setCustomerId(custId)
    
    // Calculate billing cycle end (demo)
    if (planId !== 'free') {
      const plan = getPlanById(planId)
      const endDate = new Date()
      if (plan.interval === 'month') {
        endDate.setMonth(endDate.getMonth() + 1)
      } else if (plan.interval === 'year') {
        endDate.setFullYear(endDate.getFullYear() + 1)
      }
      setBillingCycleEnd(endDate)
      localStorage.setItem('billingCycleEnd', endDate.toISOString())
    } else {
      setBillingCycleEnd(null)
      localStorage.removeItem('billingCycleEnd')
    }

    // Save to localStorage (in real app, this would sync with backend)
    localStorage.setItem('userPlan', planId)
    localStorage.setItem('subscriptionStatus', status)
    if (subId) localStorage.setItem('subscriptionId', subId)
    if (custId) localStorage.setItem('customerId', custId)
  }

  const startCheckout = async (planId, userEmail) => {
    try {
      setLoading(true)
      setError(null)
      
      const session = await createCheckoutSession(planId, userEmail)
      
      // In a real implementation, you would redirect to Stripe Checkout
      // For demo purposes, we'll simulate a successful payment
      setTimeout(() => {
        updateSubscription(planId, 'active', 'sub_' + Math.random().toString(36).substr(2, 9), 'cus_' + Math.random().toString(36).substr(2, 9))
        setLoading(false)
        alert('Payment successful! Welcome to your new plan.')
      }, 2000)
      
      return session
    } catch (err) {
      setError('Failed to start checkout process')
      setLoading(false)
      throw err
    }
  }

  const openCustomerPortal = async () => {
    try {
      if (!customerId) {
        throw new Error('No customer ID found')
      }
      
      const session = await createCustomerPortalSession(customerId)
      
      // In a real implementation, you would redirect to Stripe Customer Portal
      alert('This would open the Stripe Customer Portal for managing billing')
      
      return session
    } catch (err) {
      setError('Failed to open customer portal')
      throw err
    }
  }

  const cancelCurrentSubscription = async () => {
    try {
      if (!subscriptionId) {
        throw new Error('No subscription ID found')
      }
      
      setLoading(true)
      await cancelSubscription(subscriptionId)
      
      // Update to free plan
      updateSubscription('free', 'canceled')
      setLoading(false)
      
      alert('Subscription canceled successfully. You will retain access until the end of your billing period.')
    } catch (err) {
      setError('Failed to cancel subscription')
      setLoading(false)
      throw err
    }
  }

  // Helper functions
  const getCurrentPlan = () => getPlanById(currentPlan)
  
  const canAccess = (feature) => {
    if (typeof feature === 'string') {
      return hasFeature(currentPlan, feature)
    }
    if (typeof feature === 'number') {
      return canAccessGroup(currentPlan, feature)
    }
    return false
  }

  const isSubscriptionActive = () => {
    return subscriptionStatus === 'active' || subscriptionStatus === 'trialing'
  }

  const needsUpgrade = (requiredFeature) => {
    return !canAccess(requiredFeature) && currentPlan === 'free'
  }

  const getDaysUntilRenewal = () => {
    if (!billingCycleEnd) return null
    const now = new Date()
    const diffTime = billingCycleEnd - now
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  const value = {
    // State
    currentPlan,
    subscriptionStatus,
    customerId,
    subscriptionId,
    billingCycleEnd,
    loading,
    error,
    
    // Actions
    startCheckout,
    openCustomerPortal,
    cancelCurrentSubscription,
    updateSubscription,
    loadSubscriptionData,
    
    // Helper functions
    getCurrentPlan,
    canAccess,
    isSubscriptionActive,
    needsUpgrade,
    getDaysUntilRenewal,
    
    // Clear error
    clearError: () => setError(null)
  }

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export default SubscriptionContext

