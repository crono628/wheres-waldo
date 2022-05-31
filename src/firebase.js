import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCMpbk-rDVi3dpcna2QaBYfREcC_8qmIPk',
  authDomain: 'waldo-ce529.firebaseapp.com',
  projectId: 'waldo-ce529',
  storageBucket: 'waldo-ce529.appspot.com',
  messagingSenderId: '1050603601264',
  appId: '1:1050603601264:web:1afb375c223a43ee0963b5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
