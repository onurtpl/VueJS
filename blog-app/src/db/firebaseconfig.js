// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2vn6kj2Y4COHDJRC_5f40rS-cRKNz7as",
  authDomain: "vuejslearn-firebase.firebaseapp.com",
  projectId: "vuejslearn-firebase",
  storageBucket: "vuejslearn-firebase.firebasestorage.app",
  messagingSenderId: "184265869264",
  appId: "1:184265869264:web:ad3c8d848ed288a93adbd5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };