import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjD20KsxZ17FcGcIOF29SYl1LMbW942YA",
  authDomain: "intrumentacion-c6441.firebaseapp.com",
  databaseURL: "https://intrumentacion-c6441-default-rtdb.firebaseio.com",
  projectId: "intrumentacion-c6441",
  storageBucket: "intrumentacion-c6441.appspot.com",
  messagingSenderId: "534538867351",
  appId: "1:534538867351:web:6c5e8bc1fb282970c30fd2",
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

initFirebase();

const auth = firebase.auth();
const db = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, auth, db, googleProvider };
