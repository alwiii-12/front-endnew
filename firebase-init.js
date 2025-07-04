// firebase-init.js

// Your Firebase configuration
// This configuration must be consistent across ALL frontend files
const firebaseConfig = {
  apiKey: "AIzaSyBtG_xKqhJZFXmEvJ-Y0uqTG3WurrDSRgE",
  authDomain: "linac-qa-project.firebaseapp.com",
  projectId: "linac-qa-project",
  storageBucket: "linac-qa-project.firebasestorage.app",
  messagingSenderId: "850988733382",
  appId: "1:850988733382:web:ef75d64e30deb7e37c18c7",
  measurementId: "G-HFJ2CGS664"
};

// Use an IIFE (Immediately Invoked Function Expression) to create a private scope
// This helps prevent 'firebaseConfig has already been declared' errors if the script
// is accidentally loaded multiple times or if variables conflict globally.
(function() {
    // Use var instead of const for firebaseConfig within this IIFE scope
    var currentFirebaseConfig = firebaseConfig; // Use the globally defined firebaseConfig

    // Check if a Firebase app has already been initialized (e.g., from a previous script or internal compat SDK logic)
    // If not, initialize the default app.
    // This addresses the "App named '[DEFAULT]' already exists" error.
    if (!firebase.apps.length) {
        firebase.initializeApp(currentFirebaseConfig);
        console.log("Firebase default app initialized."); // Add a log to confirm initialization
    } else {
        console.log("Firebase default app already initialized, skipping duplicate init."); // Log if skipped
    }
})(); // Immediately invoke the function
