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

    // Initialize App Check with the correct reCAPTCHA v3 provider
    const appCheck = firebase.appCheck(app);
    
    appCheck.activate(
      '6Ld514krAAAAABYR6Wq7v0UZUQu12dRgbj7bGXKY', // Your new Site Key
      true);
    
    console.log("Firebase App Check Initialized!");
}
