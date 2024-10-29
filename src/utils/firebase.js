// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-nQZDtEcbQgZxqc8j0zkgEP8WRHYWdbE",
  authDomain: "netflix-gpt-e5205.firebaseapp.com",
  projectId: "netflix-gpt-e5205",
  storageBucket: "netflix-gpt-e5205.appspot.com",
  messagingSenderId: "71602327755",
  appId: "1:71602327755:web:1ff8c8f4337ecea8bdcb4e",
  measurementId: "G-KYQG99QRY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();