import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQU_DFfHYURWM3xw7Y7BQxvZjfWdmHrVA",
  authDomain: "mysite-2ee22.firebaseapp.com",
  projectId: "mysite-2ee22",
  storageBucket: "mysite-2ee22.appspot.com",
  messagingSenderId: "456167997814",
  appId: "1:456167997814:web:a9a4e3823880d762ff3a57",
  measurementId: "G-KEV2BXYLBM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
