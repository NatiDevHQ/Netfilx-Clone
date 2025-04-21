// firebase.js
import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbMxGo7v5n7BjQV997r1fWEcr1nrkkt4A",
  authDomain: "netflix-clone-d5d53.firebaseapp.com",
  projectId: "netflix-clone-d5d53",
  storageBucket: "netflix-clone-d5d53.appspot.com",
  messagingSenderId: "1056336112917",
  appId: "1:1056336112917:web:f5db959a5991496ee40d1c",
  measurementId: "G-67TP1P8QD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // Save additional user details in Firestore
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Signup error:", error);
    if (error.code === "auth/email-already-in-use") {
      alert("This email is already registered. Please use a different email.");
    } else if (error.code === "auth/invalid-email") {
      alert("The email address is not valid.");
    } else if (error.code === "auth/weak-password") {
      alert("The password is too weak. Please choose a stronger password.");
    } else {
      alert(error.message); // Generic error handling for other errors
    }
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login error:", error);
    alert(error.message);
  }
};

// Logout function
const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
