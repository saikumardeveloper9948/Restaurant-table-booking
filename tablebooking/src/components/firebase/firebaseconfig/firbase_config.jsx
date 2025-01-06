// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // For authentication
import "firebase/compat/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6QmyIW5fqnzmxelznGSeN5vpP-RMfa-M",
  authDomain: "signup-login-data-a4f69.firebaseapp.com",
  databaseURL: "https://signup-login-data-a4f69-default-rtdb.firebaseio.com",
  projectId: "signup-login-data-a4f69",
  storageBucket: "signup-login-data-a4f69.firebasestorage.app",
  messagingSenderId: "110772202850",
  appId: "1:110772202850:web:584207fbeeb34c1ffb903b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;

