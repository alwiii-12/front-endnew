// firebase-init.js

// Using an IIFE to encapsulate variables and prevent global conflicts.
// Adding a check for window.firebaseConfig to prevent re-declaration if this script runs multiple times.
(function() {
    // Only declare firebaseConfig if it hasn't been declared globally by this script already
    if (typeof window.firebaseConfig === 'undefined') {
        window.firebaseConfig = { // Attach to window to make it accessible if needed
          apiKey: "AIzaSyBtG_xKqhJZFXmEvJ-Y0uqTG3WurrDSRgE",
          authDomain: "linac-qa-project.firebaseapp.com",
          projectId: "linac-qa-project",
          storageBucket: "linac-qa-project.firebasestorage.app",
          messagingSenderId: "850988733382",
          appId: "1:850988733382:web:ef75d64e30deb7e37c18c7",
          measurementId: "G-HFJ2CGS664"
        };
    }

    // Ensure firebase global object exists (from firebase-app-compat.js)
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
        // Initialize Firebase app only if no app has been initialized yet
        firebase.initializeApp(window.firebaseConfig); // Use the globally available config
        console.log("Firebase default app initialized from firebase-init.js.");
    } else if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        console.log("Firebase default app already initialized, skipping duplicate init in firebase-init.js.");
    } else {
        console.error("Firebase global object not found. Ensure firebase-app-compat.js is loaded first.");
    }
})();
