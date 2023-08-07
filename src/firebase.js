// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiB45FV1lq_vFErTEZ03XpL1jnayJxiGc",
  authDomain: "netflix-clone-d3bad.firebaseapp.com",
  projectId: "netflix-clone-d3bad",
  storageBucket: "netflix-clone-d3bad.appspot.com",
  messagingSenderId: "374628001729",
  appId: "1:374628001729:web:18edcfa89bbf02cb4af140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };