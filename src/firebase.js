// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {} from 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyATl-RsEWCqZIpiQVs_90D7nn8EYfkKDjs',
  authDomain: 'react-hooks-blog-5eaff.firebaseapp.com',
  projectId: 'react-hooks-blog-5eaff',
  storageBucket: 'react-hooks-blog-5eaff.appspot.com',
  messagingSenderId: '1058086162712',
  appId: '1:1058086162712:web:8ee4c1e41bbffcf15c4e6d',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
