// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAelN3Govj8vN6nlE8rExeOMBqXChVg5lE",
  database: "https://testfb8-a772e.firebaseapp.com",
  authDomain: "fir-8465a.firebaseapp.com",
  projectId: "fir-8465a",
  storageBucket: "fir-8465a.firebasestorage.app",
  messagingSenderId: "771579533066",
  appId: "1:771579533066:web:4ed7812f67d1eb830f0cf3",
  measurementId: "G-382RRME9D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);