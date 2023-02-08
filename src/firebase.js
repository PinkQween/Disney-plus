import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_T1G5CC4azdPdU99C2lfzTSNHvpXhsRY",
  authDomain: "disney-7aad3.firebaseapp.com",
  databaseURL: "https://disney-7aad3-default-rtdb.firebaseio.com",
  projectId: "disney-7aad3",
  storageBucket: "disney-7aad3.appspot.com",
  messagingSenderId: "669609709567",
  appId: "1:669609709567:web:babf4ddbe2a8b58ce221ca",
  measurementId: "G-7022VCE9P2"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = getStorage(firebaseApp)

export { auth, provider };
export default db;