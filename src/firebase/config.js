import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD7i6ganNkNco8JEjr0Sv7K4gLIls3-QP0",
  authDomain: "microproyectoii.firebaseapp.com",
  projectId: "microproyectoii",
  storageBucket: "microproyectoii.appspot.com",
  messagingSenderId: "1042915332491",
  appId: "1:1042915332491:web:f22061fe8809d461addf8e",
  measurementId: "G-9H9R6D0SWB"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
