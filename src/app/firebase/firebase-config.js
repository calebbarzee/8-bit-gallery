// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// import * as db from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
// import * as auth from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
// import * as storage from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js';

const firebaseConfig = {
    apiKey: 'AIzaSyCghu_My8yfVjmtsiXUJshVvtxzjk3zQ94',
    authDomain: 'bit-art-gallery.firebaseapp.com',
    databaseURL: 'https://bit-art-gallery-default-rtdb.firebaseio.com',
    projectId: 'bit-art-gallery',
    storageBucket: 'bit-art-gallery.appspot.com',
    messagingSenderId: '839621438660',
    appId: '1:839621438660:web:c3607180af1a3dee24ad91',
    measurementId: 'G-N0V603SYDH',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebaseApp.auth;
const storage = firebaseApp.storage;

export { db, auth, storage };
