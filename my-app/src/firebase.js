// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLo5xBmrP1bkUecfcsZUhczShOdnkxunI",
  authDomain: "sew-it-seems.firebaseapp.com",
  projectId: "sew-it-seems",
  storageBucket: "sew-it-seems.appspot.com",
  messagingSenderId: "365690491527",
  appId: "1:365690491527:web:ddad412d0811f3d2bd5e22",
  measurementId: "G-6MX64RFW4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default getFirestore();