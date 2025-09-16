// firebase-init.js

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtG_xKqhJZFXmEvJ-Y0uqTG3WurrDSRgE",
  authDomain: "linac-qa-project.firebaseapp.com",
  projectId: "linac-qa-project",
  storageBucket: "linac-qa-project.firebasestorage.app",
  messagingSenderId: "850988733382",
  appId: "1:850988733382:web:9d33f81c1bfb13757c18c7",
  measurementId: "G-ZS97QYYFCQ"
};

// Initialize Firebase
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    console.log("Firebase Initialized Successfully!");

    // Initialize App Check
    const appCheck = firebase.appCheck(app);
    
    appCheck.activate(
      '6Ld8EYsrAAAAADcMM6k3d6lQVxjRUVpaowwdk2Lv', // Your reCAPTCHA v3 Site Key
      true);
    
    console.log("Firebase App Check Initialized!");
}
