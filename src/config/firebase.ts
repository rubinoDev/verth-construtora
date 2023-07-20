// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDI2OZknZpUhKR-QA90nWEBMiX_z_qOjT4',
  authDomain: 'verth-construtora.firebaseapp.com',
  projectId: 'verth-construtora',
  storageBucket: 'verth-construtora.appspot.com',
  messagingSenderId: '76337904192',
  appId: '1:76337904192:web:d3e9825ae469f9f46a7da5'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
