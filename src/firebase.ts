import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUCUpwyL7LFFAfHrn86XU1eYJoG9kWL1k",
    authDomain: "twitter-2980e.firebaseapp.com",
    projectId: "twitter-2980e",
    storageBucket: "twitter-2980e.appspot.com",
    messagingSenderId: "155621189492",
    appId: "1:155621189492:web:606d9a4cbc70488bf26e21",
    measurementId: "G-CG534ME7VY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication 
export const auth = getAuth(app);