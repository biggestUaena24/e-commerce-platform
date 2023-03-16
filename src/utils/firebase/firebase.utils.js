import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiSsorTy2ztJH8Ybn3LxZ9MJj0Rw9d8W8",
  authDomain: "crown-clothing-db-58dbf.firebaseapp.com",
  projectId: "crown-clothing-db-58dbf",
  storageBucket: "crown-clothing-db-58dbf.appspot.com",
  messagingSenderId: "614817237148",
  appId: "1:614817237148:web:a72699af5e0dba54518559",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    console.log("User exists");
  } else {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
