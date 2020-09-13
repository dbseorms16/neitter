import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqa3zJKsc8ah9RBbTwOb8vhQzBIm12-iQ",
  authDomain: "nwitter-db806.firebaseapp.com",
  databaseURL: "https://nwitter-db806.firebaseio.com",
  projectId: "nwitter-db806",
  storageBucket: "nwitter-db806.appspot.com",
  messagingSenderId: "25531543845",
  appId: "1:25531543845:web:95b76efa34c8f5eece6acc",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
