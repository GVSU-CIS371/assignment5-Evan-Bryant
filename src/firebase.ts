<<<<<<< HEAD
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  // COPY this from your Firebase Console
  apiKey: "your-api-key-goes-here",
  authDomain: "your-project-name-here.firebaseapp.com",
  databaseURL: "https://your-project-name-here.firebaseio.com",
  projectId: "your-project-name-here",
  storageBucket: "your-project-name.appspot.com",
  messagingSenderId: "xxxxxxxx",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export { app, db };
>>>>>>> a4/main
