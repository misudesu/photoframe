import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDqUPw2ebtf3KKAVboEAuVc-HuZFbfLp7I",
  authDomain: "enzemr-9b526.firebaseapp.com",
  databaseURL: "https://enzemr-9b526-default-rtdb.firebaseio.com",
  projectId: "enzemr-9b526",
  storageBucket: "enzemr-9b526.appspot.com",
  messagingSenderId: "155118229749",
  appId: "1:155118229749:web:f0f09853d47e7420ec8dbc",
  measurementId: "G-503J6MLMQL"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);