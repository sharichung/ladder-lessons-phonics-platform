import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './lib/AuthContext'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import GroupView from './pages/GroupView'
import MatchingGame from './pages/MatchingGame'
import SpellingGame from './pages/SpellingGame'
import Navigation from './components/layout/Navigation'
import ProtectedRoute from './components/auth/ProtectedRoute'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/group/:groupId" element={
                <ProtectedRoute>
                  <GroupView />
                </ProtectedRoute>
              } />
              <Route path="/group/:groupId/matching" element={
                <ProtectedRoute>
                  <MatchingGame />
                </ProtectedRoute>
              } />
              <Route path="/group/:groupId/spelling" element={
                <ProtectedRoute>
                  <SpellingGame />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

