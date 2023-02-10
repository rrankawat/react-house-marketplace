import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDTMgnGAg9Q0oQlZkyXTMfcnQU0PMXG9U8',
  authDomain: 'react-house-marketplace-8959f.firebaseapp.com',
  projectId: 'react-house-marketplace-8959f',
  storageBucket: 'react-house-marketplace-8959f.appspot.com',
  messagingSenderId: '478575974932',
  appId: '1:478575974932:web:3dcb64c40f36770b906501',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore()
