import { initializeApp } from "firebase/app";
import { getFirestore, collection, } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCNoGqlfie6T11tviN-Vt3jha6nA5fblkA",
  authDomain: "acc---the-gallery.firebaseapp.com",
  projectId: "acc---the-gallery",
  storageBucket: "acc---the-gallery.appspot.com",
  messagingSenderId: "498471409951",
  appId: "1:498471409951:web:c8213a6e6842f432df382a"
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
export const colRefCollections = collection(db, 'collections')