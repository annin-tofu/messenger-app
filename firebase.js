//Firebase settings   https://firebase.google.com/docs/auth/web/google-signin?authuser=1

import firebase from "firebase";

// firebase config copied and pasted from Firebase Auth. click </>. then go to config
const firebaseConfig = {
  apiKey: "AIzaSyD6D60SitrScKC_Z_KcFsp0Rg30APDM9To",
  authDomain: "messenger-app-451ca.firebaseapp.com",
  projectId: "messenger-app-451ca",
  storageBucket: "messenger-app-451ca.appspot.com",
  messagingSenderId: "836172089362",
  appId: "1:836172089362:web:01330521fc6b2abd5c70cb",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
