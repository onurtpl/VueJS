import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2vn6kj2Y4COHDJRC_5f40rS-cRKNz7as",
  authDomain: "vuejslearn-firebase.firebaseapp.com",
  projectId: "vuejslearn-firebase",
  storageBucket: "vuejslearn-firebase.firebasestorage.app",
  messagingSenderId: "184265869264",
  appId: "1:184265869264:web:dfacaa8db224a1593adbd5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth }; // Export the Firestore database instance
