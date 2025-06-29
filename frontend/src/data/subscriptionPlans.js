// Subscription plans for Ladder Lessons
// This defines the tiered subscription system with features and pricing

export const subscriptionPlans = {
  free: {
    id: 'free',
    name: 'Free Forever',
    price: 0,
    interval: 'forever',
    stripePriceId: null,
    features: [
      'Access to Group 1 (s, a, t)',
      'Basic matching game',
      'Phonics songs',
      'Audio pronunciation',
      'Teacher-led mode',
      'Zoom screen sharing optimized'
    ],
    limitations: [
      'Limited to 1 phonics group',
      'Basic games only',
      'No progress tracking',
      'Community support only'
    ],
    maxGroups: 1,
    hasProgressTracking: false,
    hasAdvancedGames: false,
    hasPremiumSupport: false,
    hasLessonPlanning: false,
    hasAssessmentTools: false,
    color: 'gray',
    popular: false
  },
  basic: {
    id: 'basic',
    name: 'Basic Teacher',
    price: 9.99,
    interval: 'month',
    stripePriceId: 'price_basic_monthly', // Would be real Stripe price ID
    features: [
      'Access to 10 phonics groups',
      'All matching and spelling games',
      'Phonics songs and audio',
      'Basic progress tracking',
      'Teacher-led mode',
      'Email support',
      'Lesson planning templates'
    ],
    limitations: [
      'Limited to 10 phonics groups',
      'Basic progress tracking',
      'Email support only'
    ],
    maxGroups: 10,
    hasProgressTracking: true,
    hasAdvancedGames: true,
    hasPremiumSupport: false,
    hasLessonPlanning: true,
    hasAssessmentTools: false,
    color: 'blue',
    popular: true
  },
  premium: {
    id: 'premium',
    name: 'Premium Teacher',
    price: 19.99,
    interval: 'month',
    stripePriceId: 'price_premium_monthly', // Would be real Stripe price ID
    features: [
      'Access to ALL phonics groups (20+)',
      'Advanced spelling and matching games',
      'Comprehensive progress tracking',
      'Student performance analytics',
      'Priority support (chat & phone)',
      'Advanced lesson planning tools',
      'Assessment and reporting tools',
      'New content monthly',
      'Early access to new features'
    ],
    limitations: [],
    maxGroups: -1, // Unlimited
    hasProgressTracking: true,
    hasAdvancedGames: true,
    hasPremiumSupport: true,
    hasLessonPlanning: true,
    hasAssessmentTools: true,
    color: 'purple',
    popular: false
  },
  annual: {
    id: 'annual',
    name: 'Premium Annual',
    price: 199.99,
    interval: 'year',
    stripePriceId: 'price_premium_annual', // Would be real Stripe price ID
    features: [
      'Everything in Premium',
      '2 months free (17% savings)',
      'Priority support',
      'Early access to new features',
      'Bonus assessment tools',
      'Dedicated account manager'
    ],
    limitations: [],
    maxGroups: -1, // Unlimited
    hasProgressTracking: true,
    hasAdvancedGames: true,
    hasPremiumSupport: true,
    hasLessonPlanning: true,
    hasAssessmentTools: true,
    color: 'gold',
    popular: false,
    savings: '17%'
  }
}

// Subscription status types
export const subscriptionStatus = {
  ACTIVE: 'active',
  PAST_DUE: 'past_due',
  CANCELED: 'canceled',
  UNPAID: 'unpaid',
  INCOMPLETE: 'incomplete',
  INCOMPLETE_EXPIRED: 'incomplete_expired',
  TRIALING: 'trialing'
}

// Helper functions
export const getPlanById = (planId) => {
  return subscriptionPlans[planId] || subscriptionPlans.free
}

export const getAllPlans = () => {
  return Object.values(subscriptionPlans)
}

export const getActivePlans = () => {
  return Object.values(subscriptionPlans).filter(plan => plan.id !== 'annual')
}

export const canAccessGroup = (userPlan, groupNumber) => {
  const plan = getPlanById(userPlan)
  if (plan.maxGroups === -1) return true // Unlimited
  return groupNumber <= plan.maxGroups
}

export const hasFeature = (userPlan, feature) => {
  const plan = getPlanById(userPlan)
  return plan[feature] || false
}

export const getUpgradeRecommendation = (currentPlan) => {
  switch (currentPlan) {
    case 'free':
      return 'basic'
    case 'basic':
      return 'premium'
    default:
      return null
  }
}

export const formatPrice = (price, interval) => {
  if (price === 0) return 'Free'
  const formatted = `$${price.toFixed(2)}`
  if (interval === 'month') return `${formatted}/month`
  if (interval === 'year') return `${formatted}/year`
  return formatted
}

export const calculateAnnualSavings = () => {
  const monthlyPrice = subscriptionPlans.premium.price * 12
  const annualPrice = subscriptionPlans.annual.price
  const savings = monthlyPrice - annualPrice
  const percentage = Math.round((savings / monthlyPrice) * 100)
  return { savings, percentage }
}

// Mock Stripe integration functions
export const createCheckoutSession = async (planId, userEmail) => {
  console.log(`Creating checkout session for plan: ${planId}, user: ${userEmail}`)
  // In a real implementation, this would call your backend to create a Stripe checkout session
  return {
    sessionId: 'cs_test_' + Math.random().toString(36).substr(2, 9),
    url: `https://checkout.stripe.com/pay/cs_test_${Math.random().toString(36).substr(2, 9)}`
  }
}

export const createCustomerPortalSession = async (customerId) => {
  console.log(`Creating customer portal session for: ${customerId}`)
  // In a real implementation, this would call your backend to create a Stripe customer portal session
  return {
    url: `https://billing.stripe.com/p/session/${Math.random().toString(36).substr(2, 9)}`
  }
}

export const cancelSubscription = async (subscriptionId) => {
  console.log(`Canceling subscription: ${subscriptionId}`)
  // In a real implementation, this would call your backend to cancel the subscription
  return { success: true }
}

export default subscriptionPlans

