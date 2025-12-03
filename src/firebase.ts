// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOzjvNvtljSrWIZ5omnoDzc5WKCmWuUfg",
  authDomain: "brew-n-save-bryant.firebaseapp.com",
  projectId: "brew-n-save-bryant",
  storageBucket: "brew-n-save-bryant.firebasestorage.app",
  messagingSenderId: "250055878376",
  appId: "1:250055878376:web:791a833361f9321dec0b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
