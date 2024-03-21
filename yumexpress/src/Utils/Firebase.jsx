// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEDcdxKoUWk_kFFNmVKxkCJCIwFwg3FKc",
  authDomain: "yumexpress-6aa02.firebaseapp.com",
  projectId: "yumexpress-6aa02",
  storageBucket: "yumexpress-6aa02.appspot.com",
  messagingSenderId: "53565195461",
  appId: "1:53565195461:web:f7958f4ec52fdc7fe05cac",
  measurementId: "G-TZK5BGW66J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();