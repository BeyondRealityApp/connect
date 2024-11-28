// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCqz64xBKi87MWhJfW-pSkWTGb_jfRvLC0",
  authDomain: "beyond-reality-connect.firebaseapp.com",
  projectId: "beyond-reality-connect",
  storageBucket: "beyond-reality-connect.firebasestorage.app",
  messagingSenderId: "655518718833",
  appId: "1:655518718833:web:9c4142096c5eaec9d434d0",
  measurementId: "G-M8G6WMWMPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics.app.automaticDataCollectionEnabled = true;