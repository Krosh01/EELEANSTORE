import { initializeApp } from "firebase/app";

console.log(process.env);
const firebaseConfig = {
  apiKey: 'AIzaSyBb2kxQS3X8YIyZWGRG5RpPLPOjTbtojh4',
  authDomain: 'auth-13f1c.firebaseapp.com',
  projectId: 'auth-13f1c',
  storageBucket: 'auth-13f1c.appspot.com',
  messagingSenderId: '155398449459',
  appId: '1:155398449459:web:78e967e4aee8f82f83f646'
};

const app = initializeApp(firebaseConfig);