// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBNfXPii4J2AS_opZHiNJkQFNQKpMZCRA",
  authDomain: "tiopatinhasbank-79150.firebaseapp.com",
  projectId: "tiopatinhasbank-79150",
  storageBucket: "tiopatinhasbank-79150.appspot.com",
  messagingSenderId: "568598188211",
  appId: "1:568598188211:web:cc34876dfc41ed9a9f20c6",
  measurementId: "G-7SNNP7M0Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };