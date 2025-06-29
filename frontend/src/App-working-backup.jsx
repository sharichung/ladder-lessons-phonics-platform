import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestPage from './TestPage'
import './App.css'

// Simple working components
const LandingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Ladder Lessons</h1>
      <p className="text-xl text-gray-600 mb-8">Interactive Phonics for Teachers</p>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Perfect for Zoom Classes</h2>
        <p className="text-lg text-gray-600 mb-6">
          Engage young learners with progressive phonics games designed for teacher-led instruction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Teacher-Led Games</h3>
            <p className="text-gray-600">Perfect for screen sharing during live classes</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Progressive Learning</h3>
            <p className="text-gray-600">Systematic phonics instruction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Dashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map(groupNum => (
          <div key={groupNum} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Group {groupNum}</h3>
            <p className="text-gray-600 mb-4">Phonics sounds and games</p>
            <a 
              href={`/group/group-${groupNum}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Start Teaching
            </a>
          </div>
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
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Phonics Songs</h3>
          <div className="space-y-3">
            {['S Song', 'A Song', 'T Song'].map(song => (
              <div key={song} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span>{song}</span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Play</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Sound Pronunciation</h3>
          <div className="grid grid-cols-3 gap-4">
            {[{letter: 'S', ipa: '/s/'}, {letter: 'A', ipa: '/æ/'}, {letter: 'T', ipa: '/t/'}].map(sound => (
              <button key={sound.letter} className="h-20 bg-orange-100 rounded-lg flex flex-col items-center justify-center hover:bg-orange-200">
                <span className="text-2xl font-bold">{sound.letter}</span>
                <span className="text-sm">{sound.ipa}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Matching Game</h3>
          <p className="text-gray-600 mb-4">Connect letters with images</p>
          <a 
            href="/group/group-1/matching"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Start Matching Game
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Spelling Practice</h3>
          <p className="text-gray-600 mb-4">Build words with letter tiles</p>
          <a 
            href="/group/group-1/spelling"
            className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Start Spelling Game
          </a>
        </div>
      </div>
    </div>
  </div>
)

const MatchingGame = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Matching Game</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Letters</h3>
          <div className="grid grid-cols-3 gap-4">
            {['S', 'A', 'T'].map(letter => (
              <button key={letter} className="h-24 bg-blue-100 rounded-lg text-3xl font-bold hover:bg-blue-200">
                {letter}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Images</h3>
          <div className="grid grid-cols-3 gap-4">
            {['Sun', 'Apple', 'Tree'].map(word => (
              <button key={word} className="h-24 bg-orange-100 rounded-lg flex flex-col items-center justify-center hover:bg-orange-200">
                <div className="text-2xl mb-1">📷</div>
                <div className="text-sm font-semibold">{word}</div>
              </button>
            ))}
          </div>
        </div>
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
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
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
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Available Letters</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {['S', 'A', 'T', 'P', 'I', 'N', 'M', 'D'].map(letter => (
            <button key={letter} className="h-16 bg-gray-100 rounded-lg text-xl font-bold hover:bg-gray-200">
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-gray-900">Ladder Lessons</a>
            <div className="space-x-4">
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="/test" className="text-gray-600 hover:text-gray-900">Test</a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/group/:groupId" element={<GroupView />} />
          <Route path="/group/:groupId/matching" element={<MatchingGame />} />
          <Route path="/group/:groupId/spelling" element={<SpellingGame />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

