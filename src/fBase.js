import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: //config,
  authDomain: //config,
  databaseURL: //config,
  projectId: //config,
  storageBucket: //config,
  messagingSenderId: //config,
  appId: //config,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
