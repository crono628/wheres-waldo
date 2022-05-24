import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAi20IHaZIjk6B6xH82T14DUqKJNfwRYbo',
  authDomain: 'todo-list-7df58.firebaseapp.com',
  projectId: 'todo-list-7df58',
  storageBucket: 'todo-list-7df58.appspot.com',
  messagingSenderId: '206618409189',
  appId: '1:206618409189:web:85dbdcef28e3ccffce3c0c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, app, storage };
