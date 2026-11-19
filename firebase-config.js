// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDFqeVALHqS7HgkyQLHf0OrmgEEuQXttE",
  authDomain: "wassers-app.firebaseapp.com",
  projectId: "wassers-app",
  storageBucket: "wassers-app.firebasestorage.app",
  messagingSenderId: "75361094126",
  appId: "1:75361094126:web:f151de8abb748e07aba6ff",
  measurementId: "G-2TV4EGYW19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
