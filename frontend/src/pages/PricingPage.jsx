import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { 
  Check, 
  Crown, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  BookOpen, 
  BarChart3,
  ArrowLeft
} from 'lucide-react'
import { useSubscription } from '../lib/SubscriptionContext'
import { subscriptionPlans, formatPrice, calculateAnnualSavings } from '../data/subscriptionPlans'

const PricingPage = () => {
  const { currentPlan, startCheckout, loading } = useSubscription()
  const [isAnnual, setIsAnnual] = useState(false)
  const [processingPlan, setProcessingPlan] = useState(null)

  const handleSelectPlan = async (planId) => {
    if (planId === 'free') {
      // Free plan doesn't require payment
      alert('You are already on the free plan!')
      return
    }

    try {
      setProcessingPlan(planId)
      await startCheckout(planId, 'teacher@example.com') // In real app, get from auth context
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setProcessingPlan(null)
    }
  }

  const getDisplayPlans = () => {
    if (isAnnual) {
      return [subscriptionPlans.free, subscriptionPlans.basic, subscriptionPlans.annual]
    }
    return [subscriptionPlans.free, subscriptionPlans.basic, subscriptionPlans.premium]
  }

  const getPlanIcon = (planId) => {
    switch (planId) {
      case 'free':
        return <BookOpen className="h-6 w-6" />
      case 'basic':
        return <Users className="h-6 w-6" />
      case 'premium':
        return <Crown className="h-6 w-6" />
      case 'annual':
        return <Star className="h-6 w-6" />
      default:
        return <BookOpen className="h-6 w-6" />
    }
  }

  const getPlanColor = (planId) => {
    switch (planId) {
      case 'free':
        return 'border-gray-200 bg-white'
      case 'basic':
        return 'border-blue-200 bg-blue-50'
      case 'premium':
        return 'border-purple-200 bg-purple-50'
      case 'annual':
        return 'border-yellow-200 bg-yellow-50'
      default:
        return 'border-gray-200 bg-white'
    }
  }

  const getButtonColor = (planId) => {
    switch (planId) {
      case 'free':
        return 'bg-gray-600 hover:bg-gray-700'
      case 'basic':
        return 'bg-blue-600 hover:bg-blue-700'
      case 'premium':
        return 'bg-purple-600 hover:bg-purple-700'
      case 'annual':
        return 'bg-yellow-600 hover:bg-yellow-700'
      default:
        return 'bg-gray-600 hover:bg-gray-700'
    }
  }

  const savings = calculateAnnualSavings()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Teaching Plan
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlock the full potential of phonics instruction with our teacher-friendly plans. 
            Perfect for live Zoom classes and screen sharing.
          </p>
          
          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Label htmlFor="billing-toggle" className="text-lg">Monthly</Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-toggle" className="text-lg">Annual</Label>
            {isAnnual && (
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Save {savings.percentage}%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {getDisplayPlans().map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative shadow-lg transition-all duration-200 hover:shadow-xl ${getPlanColor(plan.id)} ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              {plan.savings && (
                <div className="absolute -top-4 right-4">
                  <Badge className="bg-green-500 text-white px-3 py-1">
                    Save {plan.savings}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.id === 'free' ? 'bg-gray-100' :
                    plan.id === 'basic' ? 'bg-blue-100' :
                    plan.id === 'premium' ? 'bg-purple-100' :
                    'bg-yellow-100'
                  }`}>
                    {getPlanIcon(plan.id)}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(plan.price, plan.interval)}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-gray-500 ml-2">
                      per {plan.interval}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Limitations:</h4>
                    <div className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  disabled={loading || processingPlan === plan.id || currentPlan === plan.id}
                  className={`w-full py-3 text-lg font-semibold ${getButtonColor(plan.id)}`}
                >
                  {processingPlan === plan.id ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : currentPlan === plan.id ? (
                    'Current Plan'
                  ) : plan.id === 'free' ? (
                    'Get Started Free'
                  ) : (
                    `Upgrade to ${plan.name}`
                  )}
                </Button>

                {plan.id === 'free' && (
                  <p className="text-xs text-center text-gray-500">
                    No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Feature Comparison</CardTitle>
            <CardDescription className="text-center">
              See what's included in each plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Features</th>
                    <th className="text-center py-4 px-4">Free</th>
                    <th className="text-center py-4 px-4">Basic</th>
                    <th className="text-center py-4 px-4">Premium</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Phonics Groups</td>
                    <td className="text-center py-4 px-4">1 group</td>
                    <td className="text-center py-4 px-4">10 groups</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Interactive Games</td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4">All games</td>
                    <td className="text-center py-4 px-4">Advanced games</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Progress Tracking</td>
                    <td className="text-center py-4 px-4">❌</td>
                    <td className="text-center py-4 px-4">✅</td>
                    <td className="text-center py-4 px-4">✅ Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Lesson Planning</td>
                    <td className="text-center py-4 px-4">❌</td>
                    <td className="text-center py-4 px-4">Templates</td>
                    <td className="text-center py-4 px-4">Advanced tools</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Support</td>
                    <td className="text-center py-4 px-4">Community</td>
                    <td className="text-center py-4 px-4">Email</td>
                    <td className="text-center py-4 px-4">Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Our free plan gives you full access to Group 1 forever. Paid plans include a 14-day free trial.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Perfect for Zoom?</h3>
              <p className="text-gray-600">Absolutely! All our games are optimized for screen sharing during live Zoom classes.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Need help choosing?</h3>
              <p className="text-gray-600">Start with our free plan and upgrade when you need more phonics groups and features.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage

