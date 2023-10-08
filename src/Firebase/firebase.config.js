// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnLzEtIuBjp1K5XqoxuPNSrfb7DdjngCY",
  authDomain: "event-management-auth-7cdee.firebaseapp.com",
  projectId: "event-management-auth-7cdee",
  storageBucket: "event-management-auth-7cdee.appspot.com",
  messagingSenderId: "821190956979",
  appId: "1:821190956979:web:f8ac1798040eb7dbe61dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;