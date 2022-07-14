// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

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
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
export {db, storage, auth, firebase as default};
  