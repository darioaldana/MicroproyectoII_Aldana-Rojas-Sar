import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  setDoc,
  doc,
} from "firebase/firestore";
import { auth, db, googleProvider } from "./config";
import { createUser } from "./users";


// HANDLE SING IN OR REGISTER USING GOOGLE PROVIDER
export const signInWithGoogle = async ({ onSuccess }) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        phoneNumber: user.phoneNumber,
        authProvider: "google",
        email: user.email,
      });
    }

    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// HANDLE REGISTER WITH EMAIL AND PASSWORD
export const registerWithEmailAndPassword = async ({ userData, onSuccess }) => {
  try {
    const { firstName, secondName, email, password } = userData;

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: `${firstName} ${secondName}`,
      email,
    });

    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error("REGISTER FAILED", { error });
  }
};


// HANDLE LOGIN WITH EMAIL AND PASSWORD
export const logInWithEmailAndPassword = async ({ userData, onSuccess }) => {
  try {
    const { email, password } = userData;
    await signInWithEmailAndPassword(auth, email, password);

    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// HANDLE USER SIGN OUT
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("SIGN OUT FAILED", { error });
  }
};
