// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2olQ8dbn7BpiN4GoqrYmNT7xalpOcyPI",
  authDomain: "wishbin-791d4.firebaseapp.com",
  projectId: "wishbin-791d4",
  storageBucket: "wishbin-791d4.appspot.com",
  messagingSenderId: "401581655180",
  appId: "1:401581655180:web:4bcd4abfddfce149ba67a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;