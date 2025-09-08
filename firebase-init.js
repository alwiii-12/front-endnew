// This is the full content for firebase-init.js

// [NEW] Centralized Backend URL
const BACKEND_URL = "https://back-end-wrxi.onrender.com";

// Your web app's updated Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtG_xKqhJZFXmEvJ-Y0uqTG3WurrDSRgE",
  authDomain: "linac-qa-project.firebaseapp.com",
  projectId: "linac-qa-project",
  storageBucket: "linac-qa-project.firebasestorage.app",
  messagingSenderId: "850988733382",
  appId: "1:850988733382:web:9d33f81c1bfb13757c18c7",
  measurementId: "G-ZS97QYYFCQ"
};

// This line initializes the app using the compat libraries from your HTML files.
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    console.log("Firebase Initialized Successfully!");

    // Initialize App Check with the correct reCAPTCHA v3 provider
    const appCheck = firebase.appCheck(app);
    
    appCheck.activate(
      '6Ld8EYsrAAAAADcMM6k3d6lQVxjRUVpaowwdk2Lv', // Your reCAPTCHA v3 Site Key
      true);
    
    console.log("Firebase App Check Initialized!");
}
