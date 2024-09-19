// src/firebase/firestoreService.js
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Save favorite stock/crypto
export const saveFavoriteItem = async (userId, item) => {
  try {
    await addDoc(collection(db, "favorites"), {
      userId,
      item,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error saving favorite: ", error);
  }
};

// Fetch favorites for a user
export const fetchFavorites = async (userId) => {
  const q = query(collection(db, "favorites"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const favorites = querySnapshot.docs.map(doc => doc.data());
  return favorites;
};
