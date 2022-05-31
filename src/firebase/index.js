import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import firebaseConfig from "./config";
const firebaseConfig = {
  apiKey: "AIzaSyBf0BsRUx9Q6hG90utImR9V_spiuOdD4No",
  authDomain: "linked-in-clone-53251.firebaseapp.com",
  projectId: "linked-in-clone-53251",
  storageBucket: "linked-in-clone-53251.appspot.com",
  messagingSenderId: "191065102683",
  appId: "1:191065102683:web:42c01f941e815175ce627e",
  measurementId: "G-1E1VX1T43J",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
