// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcwc3wUOWruIKgCOuZqiykIx35shPZUQY",
  authDomain: "pantry-app-e2ff1.firebaseapp.com",
  projectId: "pantry-app-e2ff1",
  storageBucket: "pantry-app-e2ff1.appspot.com",
  messagingSenderId: "202322791898",
  appId: "1:202322791898:web:a0f657cb1f01e18c7a44e3",
  measurementId: "G-F05S9NQ6TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };