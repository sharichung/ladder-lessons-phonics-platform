// Simple test to check if Firebase imports work
console.log('Testing Firebase imports...')

try {
  // Test if we can import Firebase without errors
  import { initializeApp } from 'firebase/app'
  console.log('Firebase app import successful')
} catch (error) {
  console.error('Firebase import error:', error)
}

export default true

