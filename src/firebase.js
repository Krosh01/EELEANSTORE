import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBb2kxQS3X8YIyZWGRG5RpPLPOjTbtojh4",
  authDomain: "auth-13f1c.firebaseapp.com",
  projectId: "auth-13f1c",
  storageBucket: "auth-13f1c.appspot.com",
  messagingSenderId: "155398449459",
  appId: "1:155398449459:web:78e967e4aee8f82f83f646"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth();