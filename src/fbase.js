import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZjXRCgEIT6gyMIRlwxi5w_pH5f79Gmho",
  authDomain: "my-store-31136.firebaseapp.com",
  databaseURL: "https://my-store-31136.firebaseio.com",
  projectId: "my-store-31136",
  storageBucket: "my-store-31136.appspot.com",
  messagingSenderId: "56517745251",
  appId: "1:56517745251:web:e8925415267ab2e91f7656",
  measurementId: "G-TWTJTZKSZ0"
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
