import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2lFRE1itfI1zTJaPBFBaW9icuNwXtC3Q",
  authDomain: "nwitter-gdsc-7b6fd.firebaseapp.com",
  projectId: "nwitter-gdsc-7b6fd",
  storageBucket: "nwitter-gdsc-7b6fd.appspot.com",
  messagingSenderId: "271161510086",
  appId: "1:271161510086:web:a5d99cdd8c16c286602fc7",
  measurementId: "G-Y76XBLVSYS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
