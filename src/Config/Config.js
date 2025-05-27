// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgb_7sAPkwYmipUkpsEUxWklS1FzPCLww",
  authDomain: "appointment-268a9.firebaseapp.com",
  projectId: "appointment-268a9",
  storageBucket: "appointment-268a9.firebasestorage.app",
  messagingSenderId: "999698837213",
  appId: "1:999698837213:web:623f4f152fc538a85ef534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, app,db};
