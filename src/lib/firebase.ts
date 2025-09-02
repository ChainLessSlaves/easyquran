// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwrObwLtiEAtGQpoh9NmWICsfVlT_8r7A",
    authDomain: "wechainless.firebaseapp.com",
    databaseURL: "https://wechainless-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wechainless",
    storageBucket: "wechainless.appspot.com",
    messagingSenderId: "893609793198",
    appId: "1:893609793198:web:e5c5bace9ec87ba8a8ff3f",
    measurementId: "G-63V6LTKZ91"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

let analytics;
let auth: Auth;

if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    auth = getAuth(app);
}


export { app, analytics, auth };