import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SubscriptionProvider } from './lib/SubscriptionContext'
import TestPage from './TestPage'
import PricingPage from './pages/PricingPage'
import SubscriptionPage from './pages/SubscriptionPage'
import './App.css'

// Import UI components
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Crown, Users, BookOpen, ArrowRight, Star } from 'lucide-react'

// Enhanced components with subscription integration
const LandingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Ladder Lessons</h1>
      <p className="text-xl text-gray-600 mb-8">Interactive Phonics for Teachers</p>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4">Perfect for Zoom Classes</h2>
        <p className="text-lg text-gray-600 mb-6">
          Engage young learners with progressive phonics games designed for teacher-led instruction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Teacher-Led Games</h3>
            <p className="text-gray-600">Perfect for screen sharing during live classes</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Progressive Learning</h3>
            <p className="text-gray-600">Systematic phonics instruction</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/pricing">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </a>
          <a href="/dashboard">
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </a>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-gray-200">
          <CardHeader className="text-center">
            <BookOpen className="h-8 w-8 text-gray-500 mx-auto mb-2" />
            <CardTitle>Free Forever</CardTitle>
            <CardDescription className="text-2xl font-bold">$0</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Phonics Group</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Basic Games</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Zoom Optimized</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50 relative">
          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </Badge>
          <CardHeader className="text-center">
            <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <CardTitle>Basic Teacher</CardTitle>
            <CardDescription className="text-2xl font-bold">$9.99/mo</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />10 Phonics Groups</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />All Games</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Progress Tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="text-center">
            <Crown className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <CardTitle>Premium Teacher</CardTitle>
            <CardDescription className="text-2xl font-bold">$19.99/mo</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited Groups</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Advanced Analytics</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Priority Support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
)

const Dashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Teacher Dashboard</h1>
        <div className="flex space-x-3">
          <a href="/subscription">
            <Button variant="outline">
              Manage Subscription
            </Button>
          </a>
          <a href="/pricing">
            <Button>
              Upgrade Plan
            </Button>
          </a>
        </div>
      </div>
      
      {/* Plan Status */}
      <Card className="mb-8 border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold">Free Forever Plan</h3>
                <p className="text-sm text-gray-600">Access to 1 phonics group</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">Active</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map(groupNum => (
          <Card key={groupNum} className={`shadow-lg ${groupNum > 1 ? 'opacity-50' : ''}`}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Group {groupNum}</h3>
              <p className="text-gray-600 mb-4">
                {groupNum === 1 ? 'Phonics sounds: s, a, t' : 'Upgrade to unlock'}
              </p>
              {groupNum === 1 ? (
                <a href={`/group/group-${groupNum}`}>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Start Teaching
                  </Button>
                </a>
              ) : (
                <a href="/pricing">
                  <Button variant="outline" className="w-full">
                    Upgrade to Access
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
)

const GroupView = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Group 1: s, a, t</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Phonics Songs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['S Song', 'A Song', 'T Song'].map(song => (
                <div key={song} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>{song}</span>
                  <Button size="sm">Play</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Sound Pronunciation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {[{letter: 'S', ipa: '/s/'}, {letter: 'A', ipa: '/æ/'}, {letter: 'T', ipa: '/t/'}].map(sound => (
                <Button key={sound.letter} variant="outline" className="h-20 flex flex-col">
                  <span className="text-2xl font-bold">{sound.letter}</span>
                  <span className="text-sm">{sound.ipa}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Matching Game</CardTitle>
            <CardDescription>Connect letters with images</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="/group/group-1/matching">
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Start Matching Game
              </Button>
            </a>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Spelling Practice</CardTitle>
            <CardDescription>Build words with letter tiles</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="/group/group-1/spelling">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Start Spelling Game
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
)

const MatchingGame = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Matching Game</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Letters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {['S', 'A', 'T'].map(letter => (
                <Button key={letter} variant="outline" className="h-24 text-3xl font-bold">
                  {letter}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Images</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {['Sun', 'Apple', 'Tree'].map(word => (
                <Button key={word} variant="outline" className="h-24 flex flex-col">
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-sm font-semibold">{word}</div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">Click a letter, then click the matching image!</p>
      </div>
    </div>
  </div>
)

const SpellingGame = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Spelling Practice</h1>
      <Card className="shadow-lg mb-8">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold mb-4 text-center">Spell this word: SAT</h3>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-200 w-32 h-32 rounded-lg flex items-center justify-center">
              <span className="text-4xl">🐱</span>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  <span className="text-2xl font-bold text-orange-600">_</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Available Letters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {['S', 'A', 'T', 'P', 'I', 'N', 'M', 'D'].map(letter => (
              <Button key={letter} variant="outline" className="h-16 text-xl font-bold">
                {letter}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
)

function App() {
  return (
    <SubscriptionProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-gray-900">Ladder Lessons</a>
              <div className="space-x-4">
                <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
                <a href="/test" className="text-gray-600 hover:text-gray-900">Test</a>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/group/:groupId" element={<GroupView />} />
            <Route path="/group/:groupId/matching" element={<MatchingGame />} />
            <Route path="/group/:groupId/spelling" element={<SpellingGame />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </div>
      </Router>
    </SubscriptionProvider>
  )
}

export default App

