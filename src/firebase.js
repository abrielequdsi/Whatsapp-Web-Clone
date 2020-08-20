// npm i firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1aLLDqn038pQJtYHp-XKEujKN38BOjWk",
  authDomain: "whatsapp-web-clone-c6268.firebaseapp.com",
  databaseURL: "https://whatsapp-web-clone-c6268.firebaseio.com",
  projectId: "whatsapp-web-clone-c6268",
  storageBucket: "whatsapp-web-clone-c6268.appspot.com",
  messagingSenderId: "517562701606",
  appId: "1:517562701606:web:25f4896aeaaf5afa3393e7",
  measurementId: "G-7KZCBCX9GW",
};

// ----------------------------------------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// ----------------------------------------------------------
