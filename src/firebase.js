import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNi0k9HnfoFQCXTatzVXLSPc0ap1YZolc",
  authDomain: "database-shoes.firebaseapp.com",
  projectId: "database-shoes",
  storageBucket: "database-shoes.appspot.com",
  messagingSenderId: "1095861799146",
  appId: "1:1095861799146:web:102b5bc9117a6d2ac8ef93",
  measurementId: "G-EF4SKGST8R",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();