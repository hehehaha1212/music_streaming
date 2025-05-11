// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJRhqvrtx2VCG3O1saWrFZ3Hlb7ArMrkg",
  authDomain: "login-40594.firebaseapp.com",
  projectId: "login-40594",
  storageBucket: "login-40594.firebasestorage.app",
  messagingSenderId: "742116802513",
  appId: "1:742116802513:web:8f24bfed7d904573cdeaf0",
  measurementId: "G-0ZRH6QHBVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Setup Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };