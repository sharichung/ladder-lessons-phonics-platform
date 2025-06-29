import { createContext, useContext, useEffect, useState } from 'react'
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  browserPopupRedirectResolver
} from 'firebase/auth'
import { 
  doc, 
  setDoc, 
  getDoc,
  enableNetwork,
  disableNetwork
} from 'firebase/firestore'
import { initializeFirebase } from './firebase'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [services, setServices] = useState(null)

  // Initialize Firebase services
  useEffect(() => {
    const init = async () => {
      try {
        const initializedServices = await initializeFirebase()
        setServices(initializedServices)
      } catch (error) {
        console.error('Failed to initialize Firebase:', error)
        setError(error.message)
      }
    }
    init()
  }, [])

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = async () => {
      setIsOnline(true)
      if (services?.db) {
        try {
          await enableNetwork(services.db)
          console.log('Network connectivity restored')
        } catch (error) {
          console.error('Error enabling network:', error)
        }
      }
    }

    const handleOffline = async () => {
      setIsOnline(false)
      if (services?.db) {
        try {
          await disableNetwork(services.db)
          console.log('Network connectivity disabled')
        } catch (error) {
          console.error('Error disabling network:', error)
        }
      }
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [services])

  // Sign up with email and password
  const signup = async (email, password, userData) => {
    if (!services) throw new Error('Firebase services not initialized')
    if (!isOnline) throw new Error('Cannot sign up while offline')
    
    try {
      setError(null)
      const { user } = await createUserWithEmailAndPassword(services.auth, email, password)
      
      // Update user profile
      await updateProfile(user, {
        displayName: userData.name
      })

      // Create user document in Firestore
      await createUserDocument(user, userData)
      
      return user
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error)
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Sign in with email and password
  const signin = async (email, password) => {
    if (!services) throw new Error('Firebase services not initialized')
    if (!isOnline) throw new Error('Cannot sign in while offline')
    
    try {
      setError(null)
      const { user } = await signInWithEmailAndPassword(services.auth, email, password)
      return user
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error)
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Sign in with Google
  const signinWithGoogle = async () => {
    if (!services) throw new Error('Firebase services not initialized')
    if (!isOnline) throw new Error('Cannot sign in while offline')
    
    try {
      setError(null)
      const { user } = await signInWithPopup(
        services.auth, 
        services.googleProvider,
        browserPopupRedirectResolver
      )
      
      // Check if user document exists, create if not
      const userDoc = await getDoc(doc(services.db, 'users', user.uid))
      if (!userDoc.exists()) {
        await createUserDocument(user, {
          name: user.displayName,
          email: user.email,
          school: ''
        })
      }
      
      return user
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error)
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Helper function to get user-friendly error messages
  const getAuthErrorMessage = (error) => {
    switch (error.code) {
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.'
      case 'auth/user-not-found':
        return 'No account found with this email.'
      case 'auth/email-already-in-use':
        return 'An account already exists with this email.'
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.'
      case 'auth/invalid-email':
        return 'Please enter a valid email address.'
      case 'auth/popup-closed-by-user':
        return 'Sign in was cancelled. Please try again.'
      case 'auth/popup-blocked':
        return 'Pop-up was blocked by your browser. Please allow pop-ups for this site.'
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.'
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.'
      default:
        return error.message || 'An error occurred during authentication.'
    }
  }

  // Sign out
  const logout = async () => {
    if (!services) throw new Error('Firebase services not initialized')
    
    try {
      setError(null)
      await signOut(services.auth)
    } catch (error) {
      const errorMessage = getAuthErrorMessage(error)
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  // Create user document in Firestore
  const createUserDocument = async (user, additionalData = {}) => {
    if (!user || !services) return

    const userRef = doc(services.db, 'users', user.uid)
    const userDoc = await getDoc(userRef)

    if (!userDoc.exists()) {
      const { displayName, email } = user
      const createdAt = new Date()

      try {
        await setDoc(userRef, {
          email,
          role: 'teacher',
          subscription: {
            plan: 'free',
            status: 'active',
            stripeCustomerId: null,
            currentPeriodEnd: null
          },
          profile: {
            name: displayName || additionalData.name || '',
            school: additionalData.school || '',
            verified: false,
            createdAt
          },
          progress: {
            completedGroups: [],
            currentGroup: 'group-1',
            lastAccessed: createdAt
          },
          ...additionalData
        })
      } catch (error) {
        console.error('Error creating user document:', error)
        throw error
      }
    }
  }

  // Get user data from Firestore
  const getUserData = async (uid) => {
    if (!services) return null
    
    try {
      const userDoc = await getDoc(doc(services.db, 'users', uid))
      return userDoc.exists() ? userDoc.data() : null
    } catch (error) {
      console.error('Error getting user data:', error)
      return null
    }
  }

  // Update user data in Firestore
  const updateUserData = async (uid, data) => {
    if (!services) throw new Error('Firebase services not initialized')
    if (!isOnline) throw new Error('Cannot update user data while offline')
    
    try {
      const userRef = doc(services.db, 'users', uid)
      await setDoc(userRef, data, { merge: true })
    } catch (error) {
      console.error('Error updating user data:', error)
      throw error
    }
  }

  useEffect(() => {
    if (!services) return

    const unsubscribe = onAuthStateChanged(services.auth, async (user) => {
      if (user) {
        try {
          // Get additional user data from Firestore
          const userData = await getUserData(user.uid)
          setUser({ ...user, userData })
        } catch (error) {
          console.error('Error fetching user data:', error)
          setUser(user)
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [services])

  const value = {
    user,
    loading,
    error,
    isOnline,
    signup,
    signin,
    signinWithGoogle,
    logout,
    getUserData,
    updateUserData,
    createUserDocument
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContext
