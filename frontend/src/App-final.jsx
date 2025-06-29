import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SubscriptionProvider, useSubscription } from './lib/SubscriptionContext'
import { phonicsGroups, getGroupById, getGroupsByPlan, canAccessGroup, playAudio, speakPhoneme, generateUsageStats } from './data/expandedPhonicsData'
import TestPage from './TestPage'
import PricingPage from './pages/PricingPage'
import SubscriptionPage from './pages/SubscriptionPage'
import './App.css'

// Import UI components
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Crown, Users, BookOpen, ArrowRight, Star, Play, Volume2, Lock, Unlock } from 'lucide-react'

// Enhanced components with comprehensive content
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Teacher-Led Games</h3>
            <p className="text-gray-600">Perfect for screen sharing during live classes</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Progressive Learning</h3>
            <p className="text-gray-600">5+ phonics groups with systematic instruction</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <Crown className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Professional Tools</h3>
            <p className="text-gray-600">Progress tracking and lesson planning</p>
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
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />4 Phonics Groups</li>
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
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />All 5+ Groups</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Advanced Analytics</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Priority Support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
)

const Dashboard = () => {
  const { currentPlan, getCurrentPlan } = useSubscription()
  const plan = getCurrentPlan()
  const accessibleGroups = getGroupsByPlan(currentPlan)
  const allGroups = Object.values(phonicsGroups)
  const stats = generateUsageStats(currentPlan)

  return (
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
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {currentPlan === 'free' ? <BookOpen className="h-6 w-6 text-blue-600 mr-3" /> :
                 currentPlan === 'basic' ? <Users className="h-6 w-6 text-blue-600 mr-3" /> :
                 <Crown className="h-6 w-6 text-purple-600 mr-3" />}
                <div>
                  <h3 className="font-semibold">{plan.name}</h3>
                  <p className="text-sm text-gray-600">
                    Access to {stats.maxGroups === -1 ? 'unlimited' : stats.maxGroups} phonics groups
                  </p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Groups Accessed</span>
                <span>{stats.groupsAccessed} / {stats.maxGroups === -1 ? '∞' : stats.maxGroups}</span>
              </div>
              <Progress 
                value={stats.maxGroups === -1 ? 100 : (stats.groupsAccessed / stats.maxGroups) * 100} 
                className="h-2"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{stats.gamesPlayed}</div>
                <div className="text-xs text-gray-600">Games Played</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{stats.studentsTaught}</div>
                <div className="text-xs text-gray-600">Students Taught</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{stats.hoursUsed}h</div>
                <div className="text-xs text-gray-600">Hours Used</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phonics Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGroups.map(group => {
            const isAccessible = canAccessGroup(group.id, currentPlan)
            return (
              <Card key={group.id} className={`shadow-lg transition-all duration-200 hover:shadow-xl ${
                isAccessible ? 'border-green-200 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {isAccessible ? 
                        <Unlock className="h-5 w-5 text-green-500 mr-2" /> :
                        <Lock className="h-5 w-5 text-gray-400 mr-2" />
                      }
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                    </div>
                    <Badge variant={isAccessible ? "default" : "secondary"}>
                      Level {group.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="font-semibold text-lg">{group.title}</div>
                    <div className="text-sm">{group.description}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Letter Preview */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {group.letters.map(letter => (
                      <div key={letter.letter} className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-600">{letter.letter.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  {isAccessible ? (
                    <a href={`/group/${group.id}`}>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600">
                        Start Teaching
                      </Button>
                    </a>
                  ) : (
                    <a href="/pricing">
                      <Button variant="outline" className="w-full">
                        <Lock className="h-4 w-4 mr-2" />
                        Upgrade to Access
                      </Button>
                    </a>
                  )}

                  {/* Required Plan */}
                  <div className="text-xs text-center text-gray-500 mt-2">
                    Requires: {group.requiredPlan === 'free' ? 'Free Plan' : 
                              group.requiredPlan === 'basic' ? 'Basic Plan' : 'Premium Plan'}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const GroupView = () => {
  const { currentPlan } = useSubscription()
  const groupId = window.location.pathname.split('/')[2] // Extract from URL
  const group = getGroupById(groupId)
  
  if (!group) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Group Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The requested phonics group could not be found.</p>
          <a href="/dashboard">
            <Button>Back to Dashboard</Button>
          </a>
        </div>
      </div>
    )
  }

  const hasAccess = canAccessGroup(groupId, currentPlan)

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Lock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upgrade Required</h1>
          <p className="text-xl text-gray-600 mb-8">
            This phonics group requires a {group.requiredPlan} plan or higher.
          </p>
          <a href="/pricing">
            <Button size="lg">Upgrade Now</Button>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{group.name}: {group.title}</h1>
            <p className="text-xl text-gray-600">{group.description}</p>
          </div>
          <Badge className="bg-green-100 text-green-800">
            Level {group.difficulty}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Phonics Songs */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="h-5 w-5 mr-2" />
                Phonics Songs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {group.songs.map(song => (
                  <div key={song.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">{song.title}</span>
                      <div className="text-sm text-gray-600">{song.duration}</div>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => playAudio(song.audioUrl)}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Sound Pronunciation */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Volume2 className="h-5 w-5 mr-2" />
                Sound Pronunciation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {group.letters.map(letter => (
                  <Button 
                    key={letter.letter} 
                    variant="outline" 
                    className="h-20 flex flex-col hover:bg-orange-50"
                    onClick={() => speakPhoneme(letter.letter, letter.ipa)}
                  >
                    <span className="text-2xl font-bold">{letter.letter.toUpperCase()}</span>
                    <span className="text-sm">{letter.ipa}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Interactive Games */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Matching Game</CardTitle>
              <CardDescription>Connect letters with images</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">Preview:</div>
                <div className="flex space-x-2">
                  {group.matchingPairs.slice(0, 3).map(pair => (
                    <div key={pair.letter} className="text-center">
                      <div className="text-2xl">{pair.image}</div>
                      <div className="text-xs">{pair.word}</div>
                    </div>
                  ))}
                </div>
              </div>
              <a href={`/group/${group.id}/matching`}>
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
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">Sample words:</div>
                <div className="flex flex-wrap gap-2">
                  {group.spellingWords.slice(0, 3).map(word => (
                    <Badge key={word.word} variant="outline">
                      {word.word}
                    </Badge>
                  ))}
                </div>
              </div>
              <a href={`/group/${group.id}/spelling`}>
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
}

const MatchingGame = () => {
  const groupId = window.location.pathname.split('/')[2]
  const group = getGroupById(groupId)
  
  if (!group) return <div>Group not found</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Matching Game</h1>
          <Badge className="bg-blue-100 text-blue-800">
            {group.name}: {group.title}
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Letters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {group.letters.map(letter => (
                  <Button 
                    key={letter.letter} 
                    variant="outline" 
                    className="h-24 text-3xl font-bold hover:bg-blue-100"
                  >
                    {letter.letter.toUpperCase()}
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
                {group.matchingPairs.map(pair => (
                  <Button 
                    key={pair.word} 
                    variant="outline" 
                    className="h-24 flex flex-col hover:bg-orange-100"
                    onClick={() => playAudio(pair.audioUrl)}
                  >
                    <div className="text-2xl mb-1">{pair.image}</div>
                    <div className="text-sm font-semibold">{pair.word}</div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <Card className="shadow-lg bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">How to Play</h3>
              <p className="text-gray-600">
                Click a letter, then click the matching image! Perfect for teacher-led instruction during Zoom classes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const SpellingGame = () => {
  const groupId = window.location.pathname.split('/')[2]
  const group = getGroupById(groupId)
  
  if (!group) return <div>Group not found</div>
  
  const currentWord = group.spellingWords[0] // For demo, use first word

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Spelling Practice</h1>
          <Badge className="bg-orange-100 text-orange-800">
            {group.name}: {group.title}
          </Badge>
        </div>
        
        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              Spell this word: {currentWord.word.toUpperCase()}
            </h3>
            <div className="flex justify-center mb-6">
              <div className="bg-gray-200 w-32 h-32 rounded-lg flex items-center justify-center">
                <span className="text-4xl">{currentWord.image}</span>
              </div>
            </div>
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {currentWord.letters.map((letter, index) => (
                  <div key={index} className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    <span className="text-2xl font-bold text-orange-600">_</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Button 
                onClick={() => playAudio(currentWord.audioUrl)}
                variant="outline"
                className="mb-4"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Hear the Word
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Available Letters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {/* Include letters from current group plus some extras */}
              {[...group.letters.map(l => l.letter), 'b', 'f', 'h', 'j', 'l'].map(letter => (
                <Button 
                  key={letter} 
                  variant="outline" 
                  className="h-16 text-xl font-bold hover:bg-gray-100"
                >
                  {letter.toUpperCase()}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Card className="shadow-lg bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Teacher Instructions</h3>
              <p className="text-gray-600">
                Click the letters in order to spell the word. Students watch and learn through your demonstration!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

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

