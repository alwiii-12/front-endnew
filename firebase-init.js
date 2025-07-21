// This is the full content for firebase-init.js

const firebaseConfig = {
  apiKey: "AIzaSyBtG_xKqhJZFXmEvJ-Y0uqTG3WurrDSRgE",
  authDomain: "linac-qa-project.firebaseapp.com",
  projectId: "linac-qa-project",
  storageBucket: "linac-qa-project.firebasestorage.app",
  messagingSenderId: "850988733382",
  appId: "1:850988733382:web:ef75d64e30deb7e37c18c7",
  measurementId: "G-HFJ2CGS664"
};

// This line initializes the app.
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    console.log("Firebase Initialized Successfully!");

    // --- NEW: Initialize App Check ---
    const appCheck = firebase.appCheck(app);
    
    // Pass your reCAPTCHA v3 site key (public key) to activate().
    appCheck.activate(
      '6LfYI4orAAAAAD07xNe4LguLbq812SnWDwG5zknw', // Your Site Key is now included here.

      // Optional argument. If true, the SDK automatically refreshes App Check
      // tokens as needed.
      true);
    
    console.log("Firebase App Check Initialized!");
}
