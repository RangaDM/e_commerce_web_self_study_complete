// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHE7leZifroaSwp9cLrVOVPB8JNYxoDR8",
  authDomain: "e-commerce-pro-e4d07.firebaseapp.com",
  projectId: "e-commerce-pro-e4d07",
  storageBucket: "e-commerce-pro-e4d07.appspot.com",
  messagingSenderId: "218007166966",
  appId: "1:218007166966:web:5821350f079bef0b1df1d7"
};

// Initialize Firebase
const app = getApps.length ? getApps(): initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;