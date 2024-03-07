// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-31d4b.firebaseapp.com",
  projectId: "mern-blog-31d4b",
  storageBucket: "mern-blog-31d4b.appspot.com",
  messagingSenderId: "452185341924",
  appId: "1:452185341924:web:a96f7104ae377d7c1d51f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);