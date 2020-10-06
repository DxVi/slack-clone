import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXa9aetrcxGPvqMGTJnK5Fsa5t58Yec_o",
  authDomain: "slack-clone-693be.firebaseapp.com",
  databaseURL: "https://slack-clone-693be.firebaseio.com",
  projectId: "slack-clone-693be",
  storageBucket: "slack-clone-693be.appspot.com",
  messagingSenderId: "424989202875",
  appId: "1:424989202875:web:c2308abe2b3fb64c0c8c9e",
  measurementId: "G-5BTTCLXL7C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// import {db} from './firebase';
// import db (database) from './firebase';
