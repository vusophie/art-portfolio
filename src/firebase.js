// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFZBwUaqqObcWqE5r2n4lriLzcFGv14is",
  authDomain: "art-portfolio-30682.firebaseapp.com",
  projectId: "art-portfolio-30682",
  storageBucket: "art-portfolio-30682.firebasestorage.app",
  messagingSenderId: "7777997478",
  appId: "1:7777997478:web:8d4158cd297a33a989da67",
  measurementId: "G-6TPR89PJKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export {storage, db};