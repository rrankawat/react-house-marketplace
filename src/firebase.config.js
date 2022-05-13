import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbf_ktYFyIfin1iSXMkF2HH3LMxaMg6mw',
  authDomain: 'react-house-marketplace-c2e2d.firebaseapp.com',
  projectId: 'react-house-marketplace-c2e2d',
  storageBucket: 'react-house-marketplace-c2e2d.appspot.com',
  messagingSenderId: '383762014951',
  appId: '1:383762014951:web:778705a423da21ee623842',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
