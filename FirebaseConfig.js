// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEBzDeHWWe52rFNVqtdmgRhO1YVzogn3c",
    authDomain: "ed-project-588cd.firebaseapp.com",
    projectId: "ed-project-588cd",
    storageBucket: "ed-project-588cd.appspot.com",  // ✅ Corrected storage bucket
    messagingSenderId: "144079716619",
    appId: "1:144079716619:web:5b9f948da938486aeba20e",
    measurementId: "G-MMS32Z8VM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // ✅ Initialize auth

export { auth };  // ✅ Export `auth` properly

