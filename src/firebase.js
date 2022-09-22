import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDM4JCMVBLqRcVWT4NOVjunJjqcSM0uNvw",
  authDomain: "netflix-91f5f.firebaseapp.com",
  projectId: "netflix-91f5f",
  storageBucket: "netflix-91f5f.appspot.com",
  messagingSenderId: "192134583151",
  appId: "1:192134583151:web:0acf59dde265537f45ce9a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
