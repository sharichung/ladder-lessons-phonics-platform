import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  GoogleAuthProvider, 
  connectAuthEmulator,
  browserPopupRedirectResolver
} from 'firebase/auth'
import { 
  getFirestore, 
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  initializeFirestore,
  CACHE_SIZE_UNLIMITED
} from 'firebase/firestore'
import { 
  getStorage, 
  connectStorageEmulator 
} from 'firebase/storage'
import { 
  getFunctions, 
  connectFunctionsEmulator 
} from 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyA760A3u4jPGjq0verrZ1JpjYXnDJo4Ukg",
  authDomain: "ladder-lessons.firebaseapp.com",
  projectId: "ladder-lessons",
  storageBucket: "ladder-lessons.firebasestorage.app",
  messagingSenderId: "1012798746977",
  appId: "1:1012798746977:web:b239f0713b9d29fab79520",
  measurementId: "G-GNLLTFQEJF"
}

// Initialize Firebase lazily
let app;
let auth;
let db;
let storage;
let functions;
let googleProvider;

export const initializeFirebase = async () => {
  if (!app) {
    app = initializeApp(firebaseConfig)
    
    // Initialize Auth with custom settings
    auth = getAuth(app)
    auth.useDeviceLanguage()
    
    // Initialize Firestore with settings for offline persistence
    db = initializeFirestore(app, {
      cacheSizeBytes: CACHE_SIZE_UNLIMITED,
      experimentalForceLongPolling: true,
      useFetchStreams: false
    })
    
    // Enable offline persistence
    try {
      await enableIndexedDbPersistence(db, {
        synchronizeTabs: true
      })
      console.log('Offline persistence enabled')
    } catch (err) {
      if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.')
      } else if (err.code === 'unimplemented') {
        console.warn('The current browser doesn\'t support offline persistence')
      } else {
        console.error('Error enabling offline persistence:', err)
      }
    }

    storage = getStorage(app)
    functions = getFunctions(app)
    
    // Configure Google Provider with custom settings
    googleProvider = new GoogleAuthProvider()
    googleProvider.addScope('email')
    googleProvider.addScope('profile')
    googleProvider.setCustomParameters({
      prompt: 'select_account',
      display: 'popup'
    })

    if (import.meta.env.DEV && typeof window !== 'undefined') {
      try {
        if (!auth._delegate._config.emulator) {
          connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
        }
        if (!db._delegate._databaseId.projectId.includes('localhost')) {
          connectFirestoreEmulator(db, 'localhost', 8080)
        }
        if (!storage._delegate._host.includes('localhost')) {
          connectStorageEmulator(storage, 'localhost', 9199)
        }
        if (!functions._delegate._url.includes('localhost')) {
          connectFunctionsEmulator(functions, 'localhost', 5001)
        }
      } catch (error) {
        console.log('Firebase emulators connection skipped:', error.message)
      }
    }
  }

  return { 
    app, 
    auth, 
    db, 
    storage, 
    functions, 
    googleProvider,
    browserPopupRedirectResolver 
  }
}

export { app, auth, db, storage, functions, googleProvider }
export default app
