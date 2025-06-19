// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR29Ymp8q_zpZ4lIP5gX5qI6COucBt3YM",
  authDomain: "netflixgpt-4e9e5.firebaseapp.com",
  projectId: "netflixgpt-4e9e5",
  storageBucket: "netflixgpt-4e9e5.firebasestorage.app",
  messagingSenderId: "821083254643",
  appId: "1:821083254643:web:1e6342e5ba5e096f105f06",
  measurementId: "G-9LZ9KFJ58H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();