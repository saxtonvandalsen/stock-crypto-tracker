// src/auth/AuthService.js
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Register User
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Login User
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Logout User
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
