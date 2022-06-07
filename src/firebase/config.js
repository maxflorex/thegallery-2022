import { initializeApp } from "firebase/app";
import { getFirestore, collection, } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

// INIT SERVICES
export const db = getFirestore()

// FIREBASE CLOUD STORAGE
export const storage = getStorage(app)

// AUTHENTIFICATION
export const auth = getAuth(app)

// COLLECTIONS REF

export const colRefArt = collection(db, 'art')
export const colRefArtist = collection(db, 'artists')
export const colRefCollection = collection(db, 'collections')
export const colRefInqueries = collection(db, 'inqueries')
export const colRefSubscription = collection(db, 'subscription')