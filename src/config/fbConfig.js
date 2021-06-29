import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const fbconfig = firebase.initializeApp({
  apiKey: "AIzaSyBnCcYZs11psRhzThaMuesGshZgvn7YimE",
  authDomain: "moviehub-react-24731.firebaseapp.com",
  projectId: "moviehub-react-24731",
  storageBucket: "moviehub-react-24731.appspot.com",
  messagingSenderId: "302379201861",
  appId: "1:302379201861:web:946357fa416d8a3b77ba2c",
});

fbconfig.firestore().settings({ timestampsInSnapshots: true });

export default fbconfig;
