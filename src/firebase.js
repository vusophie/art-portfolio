// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export {storage};