import { useState, useEffect, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./lib/AuthContext";
import { SubscriptionProvider } from "./lib/SubscriptionContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navigation from "./components/layout/Navigation";
import Loading from "./components/ui/Loading";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Lazy load all pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GroupView = lazy(() => import("./pages/GroupView"));
const MatchingGame = lazy(() => import("./pages/MatchingGame"));
const SpellingGame = lazy(() => import("./pages/SpellingGame"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const SubscriptionPage = lazy(() => import("./pages/SubscriptionPage"));
const TestPage = lazy(() => import("./TestPage"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };
    checkLoginStatus();
  }, []);

  return (
    <AuthProvider>
      <SubscriptionProvider>
        <Router>
          <Navigation />
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/group/:groupId"
                  element={
                    <ProtectedRoute>
                      <GroupView />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/matching-game/:groupId"
                  element={
                    <ProtectedRoute>
                      <MatchingGame />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/spelling-game/:groupId"
                  element={
                    <ProtectedRoute>
                      <SpellingGame />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </SubscriptionProvider>
    </AuthProvider>
  );
}

export default App;
