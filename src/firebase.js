/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const storage = getStorage(app);

export const listRef = ref(storage, 'gs://codehub-be37d.appspot.com/books');
export const vidRef = ref(storage, 'gs://codehub-be37d.appspot.com/videos');
