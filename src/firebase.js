import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLsPS15IuX2SwotuKEuVnyWNJ65QSS0r8",
  authDomain: "clone-703ac.firebaseapp.com",
  projectId: "clone-703ac",
  storageBucket: "clone-703ac.appspot.com",
  messagingSenderId: "922555077809",
  appId: "1:922555077809:web:33c99e19abb11a0452be90",
  measurementId: "G-XEE884DJX5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };