import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD18Kf6MgEeaoeKmGKtY_-HwQZZbeGh6Xg",
  authDomain: "stockcryptotracker-1ef81.firebaseapp.com",
  projectId: "stockcryptotracker-1ef81",
  storageBucket: "stockcryptotracker-1ef81.appspot.com",
  messagingSenderId: "1065459737162",
  appId: "1:1065459737162:web:e25a9d7d984e07d1c6fcb3",
  measurementId: "G-GZF0KHTE7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore/Firebase services and export
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db
export { auth };
export { db };