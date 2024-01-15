// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy-SkNV-VXwWP7Dil046IJetudS6jK7iY",
  authDomain: "rj-ecommerce.firebaseapp.com",
  projectId: "rj-ecommerce",
  storageBucket: "rj-ecommerce.appspot.com",
  messagingSenderId: "760282200173",
  appId: "1:760282200173:web:73d5fa07b7fb311294e764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// consumimos fireStore de nuestro proyecto de firebase por eso la constante db
export const db = getFirestore( app )
// getDocs(baseDeDatos, coleccion)


export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

