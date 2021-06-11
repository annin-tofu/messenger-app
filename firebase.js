import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXDnu06cEB7QoKeEU4mIUWCNzQidP_Bxo",
  authDomain: "whatsapp-efe64.firebaseapp.com",
  projectId: "whatsapp-efe64",
  storageBucket: "whatsapp-efe64.appspot.com",
  messagingSenderId: "726763955330",
  appId: "1:726763955330:web:50499ad11eef66e59f409b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
