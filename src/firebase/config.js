import * as firebase from '@firebase/app';
import '@firebase/auth';
import { getAuth } from '@firebase/auth';
import '@firebase/firestore';
// TODO: check https://firebase.google.com/docs/web/setup for using different firebase features.

////////////////
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseWebConfig = {
  apiKey: "AIzaSyCLhN9Naszfb44mgFc-L-9zs1PigFkIiWo",
  authDomain: "monashhealthmobileapp-b25bc.firebaseapp.com",
  projectId: "monashhealthmobileapp-b25bc",
  storageBucket: "monashhealthmobileapp-b25bc.appspot.com",
  messagingSenderId: "975845697828",
  appId: "1:975845697828:web:e17551442eb5f9cab0abb1",
  measurementId: "G-824N44GDHM"
};

const firebaseApp = firebase.initializeApp(firebaseWebConfig);

const auth = getAuth(firebaseApp);

export { auth };
export default firebaseApp;
