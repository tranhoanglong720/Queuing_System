import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD8snVvm6Y2C4D3broCzyEjreQ9WwQXslQ",
  authDomain: "ticketsale-671b3.firebaseapp.com",
  databaseURL: "https://ticketsale-671b3-default-rtdb.firebaseio.com",
  projectId: "ticketsale-671b3",
  storageBucket: "ticketsale-671b3.appspot.com",
  messagingSenderId: "504328094553",
  appId: "1:504328094553:web:ea81b88f37a2f3a4d2c248",
  measurementId: "G-CRF5YJ0GZ3",
};

firebase.initializeApp(firebaseConfig);
// export const auth = getAuth();
export const dataref = firebase.database();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default firebase;
