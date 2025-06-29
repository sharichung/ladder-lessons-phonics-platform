import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Users, 
  Monitor, 
  Volume2, 
  Gamepad2, 
  Star,
  Check,
  Play,
  Zap,
  Heart,
  Award
} from 'lucide-react'

const LandingPage = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      title: "Zoom-Optimized",
      description: "Perfect for screen sharing during live classes. Teacher controls everything while students watch and learn."
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-orange-500" />,
      title: "Interactive Games",
      description: "Engaging matching and spelling games that make phonics fun and memorable for young learners."
    },
    {
      icon: <Volume2 className="h-8 w-8 text-green-500" />,
      title: "Audio-Rich Learning",
      description: "IPA-based pronunciation, phonics songs, and clear audio feedback for every sound and word."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      title: "Progressive Structure",
      description: "Carefully sequenced sound groups that build upon each other for systematic phonics instruction."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Kindergarten Teacher",
      content: "My students are so much more engaged during phonics time! The games are perfect for our Zoom classes.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Reading Specialist",
      content: "Finally, a phonics platform designed for teachers. The click-to-connect games work flawlessly on screen share.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "1st Grade Teacher",
      content: "The progressive structure is exactly what I needed. My students are reading faster than ever before!",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Ladder Lessons",
      features: [
        "Access to Group 1 (s, a, t)",
        "Basic matching game",
        "Phonics songs",
        "Audio pronunciation"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "month",
      description: "Complete phonics curriculum for your classroom",
      features: [
        "All phonics groups (20+ groups)",
        "Advanced spelling games",
        "Progress tracking",
        "Premium support",
        "New content monthly",
        "Lesson planning tools"
      ],
      buttonText: "Start Premium",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Yearly",
      price: "$99",
      period: "year",
      description: "Best value for dedicated teachers",
      features: [
        "Everything in Premium",
        "2 months free",
        "Priority support",
        "Early access to new features",
        "Bonus assessment tools"
      ],
      buttonText: "Save 17%",
      buttonVariant: "default",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            <Zap className="h-4 w-4 mr-1" />
            Perfect for Zoom Classes
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Interactive Phonics Made
            <span className="block bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Simple for Teachers
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Engage young learners with progressive phonics games designed for teacher-led instruction. 
            Perfect for screen sharing during live Zoom classes with zero student device requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-lg px-8 py-3"
              onClick={() => navigate('/login')}
            >
              <Play className="h-5 w-5 mr-2" />
              Start Teaching Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Monitor className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Free forever plan available • No credit card required
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Modern Teachers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature designed with live online instruction in mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Start teaching engaging phonics in minutes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Group</h3>
              <p className="text-gray-600">Select from progressive phonics groups (s,a,t → p,i,n → etc.)</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Screen</h3>
              <p className="text-gray-600">Open the lesson in your browser and share your screen on Zoom</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Teach & Engage</h3>
              <p className="text-gray-600">Control the games while students watch, learn, and participate verbally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by Teachers Everywhere
            </h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.9/5 from 500+ teachers</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works for your teaching needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all ${plan.popular ? 'border-2 border-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    <Heart className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup" className="block">
                    <Button 
                      variant={plan.buttonVariant} 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600' : ''}`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include a 14-day free trial • Cancel anytime • No setup fees
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Phonics Teaching?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teachers who are making phonics fun and effective with Ladder Lessons
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Users className="h-5 w-5 mr-2" />
                Start Your Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
              <Monitor className="h-5 w-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

