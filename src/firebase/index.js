// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCghu_My8yfVjmtsiXUJshVvtxzjk3zQ94",
  authDomain: "bit-art-gallery.firebaseapp.com",
  projectId: "bit-art-gallery",
  storageBucket: "bit-art-gallery.appspot.com",
  messagingSenderId: "839621438660",
  appId: "1:839621438660:web:c3607180af1a3dee24ad91",
  measurementId: "G-N0V603SYDH"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
export {db, storage, firebase as default};
// export const authenticate = getAuth(app);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
  