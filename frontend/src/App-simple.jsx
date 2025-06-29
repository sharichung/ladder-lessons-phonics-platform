import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import GroupView from './pages/GroupView'
import MatchingGame from './pages/MatchingGame'
import SpellingGame from './pages/SpellingGame'
import Navigation from './components/layout/Navigation'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/group/:groupId" element={<GroupView />} />
          <Route path="/group/:groupId/matching" element={<MatchingGame />} />
          <Route path="/group/:groupId/spelling" element={<SpellingGame />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

