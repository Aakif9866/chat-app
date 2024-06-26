import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY, // for vite this is how it works
  authDomain: "reactchat-97c2d.firebaseapp.com",
  projectId: "reactchat-97c2d",
  storageBucket: "reactchat-97c2d.appspot.com",
  messagingSenderId: "283301479214",
  appId: "1:283301479214:web:c1221143663c62870330bf",
  measurementId: "G-RBP3ZDPPZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()