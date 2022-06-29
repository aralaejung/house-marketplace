// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvI1OgprMt3jojvWia2pAOFGp2R-O4zv8",
  authDomain: "house-marketplace-app-aade0.firebaseapp.com",
  projectId: "house-marketplace-app-aade0",
  storageBucket: "house-marketplace-app-aade0.appspot.com",
  messagingSenderId: "252216262584",
  appId: "1:252216262584:web:3fb062eac889caa5de994d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
