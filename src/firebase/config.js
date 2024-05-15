import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBD9hpk0V-V6L92a8hah3zJssRvqHveico",
  authDomain: "psychologists-f2ad7.firebaseapp.com",
  databaseURL:
    "https://psychologists-f2ad7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-f2ad7",
  storageBucket: "psychologists-f2ad7.appspot.com",
  messagingSenderId: "340966817026",
  appId: "1:340966817026:web:5ceba9308302e10737961b",
  measurementId: "G-HB2KY5D5Z3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
