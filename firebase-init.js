// firebase-init.js

// Your Firebase configuration
// This configuration must be consistent across ALL frontend files
// The appId used here is "1:850988733382:web:ef75d64e30deb7e37c18c7"
// which was the most common one across your provided files.
const firebaseConfig = {
  apiKey: "AIzaSyBtG_xKqhJZFXmEvJ-Y0uqTG3WurrDSRgE",
  authDomain: "linac-qa-project.firebaseapp.com",
  projectId: "linac-qa-project",
  storageBucket: "linac-qa-project.firebasestorage.app",
  messagingSenderId: "850988733382",
  appId: "1:850988733382:web:ef75d64e30deb7e37c18c7",
  measurementId: "G-HFJ2CGS664"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// Export Firebase services for use in other scripts
// Using the Compat SDK's global 'firebase' object (window.firebase)
// We will then reference firebase.auth() and firebase.firestore() directly.
