// Import the functions you need from the SDKs you need

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
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();
export const authenticate = getAuth(app);

