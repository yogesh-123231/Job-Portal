// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

// Your Firebase config (replace with your own if needed)
const firebaseConfig = {
  apiKey: "AIzaSyBclWBkPX8Tbw3IWJU5fdEK1bnDUKVWBDI",
  authDomain: "job-portal-a66c5.firebaseapp.com",
  projectId: "job-portal-a66c5",
  storageBucket: "job-portal-a66c5.appspot.com",
  messagingSenderId: "599282020158",
  appId: "1:599282020158:web:7ea6f0113f9e025845066f",
  measurementId: "G-1MDQKVSF0X"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Auth and Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export everything needed
export {
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
};
