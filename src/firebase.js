import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCARwM1CfuQfwSwmJErkeLtReqmnkSIA1w",
  authDomain: "twitter-clone-c580a.firebaseapp.com",
  projectId: "twitter-clone-c580a",
  storageBucket: "twitter-clone-c580a.appspot.com",
  messagingSenderId: "478203537338",
  appId: "1:478203537338:web:284880a090c70986c01f83",
  measurementId: "G-6LL1PHLRVW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
