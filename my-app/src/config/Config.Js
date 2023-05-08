import * as firebase from 'firebase'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1ygY5zvYFCEcJwVJ5sgnLIkx8I6KBaM",
  authDomain: "sewitseems.firebaseapp.com",
  projectId: "sewitseems",
  storageBucket: "sewitseems.appspot.com",
  messagingSenderId: "620729802147",
  appId: "1:620729802147:web:db4e4f95f1f5c16dcace16",
  measurementId: "G-FMPCNNN3S2"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage()

export {auth,db,storage}