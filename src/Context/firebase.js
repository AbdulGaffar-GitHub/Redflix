import React from 'react';
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDiB45FV1lq_vFErTEZ03XpL1jnayJxiGc",
    authDomain: "netflix-clone-d3bad.firebaseapp.com",
    projectId: "netflix-clone-d3bad",
    storageBucket: "netflix-clone-d3bad.appspot.com",
    messagingSenderId: "374628001729",
    appId: "1:374628001729:web:18edcfa89bbf02cb4af140"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

// Corrected spelling of FirebaseContext
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .catch(err => alert(err));
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .catch(err => alert(err));
  }

  const GoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider);
    // signInWithRedirect(auth, GoogleProvider);
  }

  return (
    <FirebaseContext.Provider value={{ signUp, signIn, GoogleSignIn }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}
