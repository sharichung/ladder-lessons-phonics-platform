import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  ArrowLeft, 
  Crown, 
  Calendar, 
  CreditCard, 
  Settings, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Zap
} from 'lucide-react'
import { useSubscription } from '../lib/SubscriptionContext'
import { getPlanById, formatPrice, getUpgradeRecommendation } from '../data/subscriptionPlans'

const SubscriptionPage = () => {
  const {
    currentPlan,
    subscriptionStatus,
    billingCycleEnd,
    loading,
    error,
    openCustomerPortal,
    cancelCurrentSubscription,
    getDaysUntilRenewal,
    isSubscriptionActive,
    clearError
  } = useSubscription()

  const [showCancelConfirm, setShowCancelConfirm] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)

  const plan = getPlanById(currentPlan)
  const daysUntilRenewal = getDaysUntilRenewal()
  const upgradeRecommendation = getUpgradeRecommendation(currentPlan)

  const handleOpenPortal = async () => {
    try {
      setActionLoading(true)
      await openCustomerPortal()
    } catch (err) {
      console.error('Portal error:', err)
    } finally {
      setActionLoading(false)
    }
  }

  const handleCancelSubscription = async () => {
    try {
      setActionLoading(true)
      await cancelCurrentSubscription()
      setShowCancelConfirm(false)
    } catch (err) {
      console.error('Cancel error:', err)
    } finally {
      setActionLoading(false)
    }
  }

  const getStatusBadge = () => {
    switch (subscriptionStatus) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case 'trialing':
        return <Badge className="bg-blue-100 text-blue-800">Trial</Badge>
      case 'past_due':
        return <Badge className="bg-yellow-100 text-yellow-800">Past Due</Badge>
      case 'canceled':
        return <Badge className="bg-red-100 text-red-800">Canceled</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{subscriptionStatus}</Badge>
    }
  }

  const getPlanIcon = () => {
    switch (currentPlan) {
      case 'basic':
        return <CreditCard className="h-8 w-8 text-blue-500" />
      case 'premium':
      case 'annual':
        return <Crown className="h-8 w-8 text-purple-500" />
      default:
        return <Zap className="h-8 w-8 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Subscription Management</h1>
          <p className="text-xl text-gray-600">Manage your Ladder Lessons subscription and billing</p>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {error}
              <Button 
                variant="link" 
                className="p-0 h-auto text-red-600 ml-2"
                onClick={clearError}
              >
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Plan */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {getPlanIcon()}
                  <span className="ml-3">Current Plan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600">
                      {plan.price === 0 ? 'Free forever' : formatPrice(plan.price, plan.interval)}
                    </p>
                  </div>
                  {getStatusBadge()}
                </div>

                {/* Plan Features */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {plan.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {plan.features.length > 6 && (
                    <p className="text-sm text-gray-500 mt-2">
                      +{plan.features.length - 6} more features
                    </p>
                  )}
                </div>

                {/* Billing Info */}
                {currentPlan !== 'free' && isSubscriptionActive() && (
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">
                          {daysUntilRenewal !== null ? (
                            daysUntilRenewal > 0 ? (
                              `Renews in ${daysUntilRenewal} days`
                            ) : (
                              'Renews today'
                            )
                          ) : (
                            'Billing cycle information unavailable'
                          )}
                        </span>
                      </div>
                      {billingCycleEnd && (
                        <span className="text-sm text-gray-500">
                          {billingCycleEnd.toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Billing Management */}
            {currentPlan !== 'free' && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Billing Management
                  </CardTitle>
                  <CardDescription>
                    Manage your payment methods and billing information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={handleOpenPortal}
                      disabled={actionLoading}
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Manage Billing
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setShowCancelConfirm(true)}
                      disabled={actionLoading || subscriptionStatus === 'canceled'}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      Cancel Subscription
                    </Button>
                  </div>
                  
                  {subscriptionStatus === 'canceled' && (
                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <AlertDescription className="text-yellow-800">
                        Your subscription has been canceled. You'll retain access until {billingCycleEnd?.toLocaleDateString()}.
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Cancel Confirmation */}
            {showCancelConfirm && (
              <Card className="shadow-lg border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Cancel Subscription</CardTitle>
                  <CardDescription>
                    Are you sure you want to cancel your subscription?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-red-200 bg-red-50">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      You'll lose access to premium features at the end of your billing cycle. 
                      Your account will be downgraded to the free plan.
                    </AlertDescription>
                  </Alert>
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline"
                      onClick={() => setShowCancelConfirm(false)}
                      disabled={actionLoading}
                    >
                      Keep Subscription
                    </Button>
                    <Button 
                      onClick={handleCancelSubscription}
                      disabled={actionLoading}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      {actionLoading ? 'Canceling...' : 'Yes, Cancel'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upgrade Recommendation */}
            {upgradeRecommendation && (
              <Card className="shadow-lg border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Upgrade Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    Unlock more phonics groups and advanced features with our {getPlanById(upgradeRecommendation).name} plan.
                  </p>
                  <Link to="/pricing">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Plans
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Usage Stats */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Usage This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Groups Accessed</span>
                  <span className="font-semibold">
                    {currentPlan === 'free' ? '1' : currentPlan === 'basic' ? '8' : '15'} / {plan.maxGroups === -1 ? '∞' : plan.maxGroups}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Games Played</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Students Taught</span>
                  <span className="font-semibold">23</span>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  {currentPlan === 'free' ? 
                    'Get help from our community forum and documentation.' :
                    currentPlan === 'basic' ?
                    'Email support is available for Basic plan users.' :
                    'Priority support via chat, email, and phone for Premium users.'
                  }
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Help Center
                  </Button>
                  {currentPlan !== 'free' && (
                    <Button variant="outline" size="sm" className="w-full">
                      Contact Support
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage

