// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcd9LYAZsl0EFLnQJjiCHmuYNs3YCvEwY",
  authDomain: "personal-finance-d8679.firebaseapp.com",
  projectId: "personal-finance-d8679",
  storageBucket: "personal-finance-d8679.firebasestorage.app",
  messagingSenderId: "44120146554",
  appId: "1:44120146554:web:616c6fb7d108b7ff4531c3",
  measurementId: "G-QQYNXKDJ6B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
