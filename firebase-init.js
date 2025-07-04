// firebase-init.js

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtG_xKqhJZFXmEvJ-Y0uqTG3WurrDSRgE",
  authDomain: "linac-qa-project.firebaseapp.com",
  projectId: "linac-qa-project",
  storageBucket: "linac-qa-project.firebasestorage.app",
  messagingSenderId: "850988733382",
  appId: "1:850988733382:web:ef75d64e30deb7e37c18c7",
  measurementId: "G-HFJ2CGS664"
};

// Check if a Firebase app has already been initialized (e.g., from a previous script or internal compat SDK logic)
// If not, initialize the default app.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// If an app already exists, we just use that existing default app.
