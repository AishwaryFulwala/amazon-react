import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = (email, password, cb) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      if (auth) {
        cb();
      }
    })
    .catch(error => alert(error.message));
};

export const signInUser = (email, password, cb) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(auth => {
      if (auth) {
        cb();
      }
    })
    .catch(error => alert(error.message));
};
