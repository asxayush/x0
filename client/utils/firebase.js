import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "agent-91792.firebaseapp.com",
  projectId: "agent-91792",
  storageBucket: "agent-91792.firebasestorage.app",
  messagingSenderId: "550269844266",
  appId: "1:550269844266:web:ff2e63632162653ad1bc53",
  measurementId: "G-Z4VLF67NHK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };