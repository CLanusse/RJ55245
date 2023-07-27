// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjLE8VNe8Fa0bvGcLaCDzVhCykcEFwYoc",
  authDomain: "rj-55245.firebaseapp.com",
  projectId: "rj-55245",
  storageBucket: "rj-55245.appspot.com",
  messagingSenderId: "181204292496",
  appId: "1:181204292496:web:f1b30a630eaa1956525915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)