// Import the db instance from firebaseConfig instead of calling getFirestore() directly
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";  // Import the initialized Firestore instance

export const saveFavoriteItem = async (uid, cryptoData) => {
    try {
        const docRef = doc(db, "favorites", uid);  // Reference to user-specific favorites
        const docSnap = await getDoc(docRef);

        let favorites = [];

        if (docSnap.exists()) {
            favorites = docSnap.data().items || [];
        }

        // Check if the favorite already exists to avoid duplicates
        const existing = favorites.find(fav => fav.item[0].symbol === cryptoData[0].symbol);

        if (!existing) {
            favorites.push({ item: cryptoData });
            await setDoc(docRef, { items: favorites });
            console.log("Crypto saved successfully:", favorites);
        } else {
            console.log("Crypto already exists in favorites.");
        }
    } catch (error) {
        console.error("Error saving favorite item:", error);
        throw error;
    }
};

export const fetchFavorites = async (uid) => {
    try {
        const docRef = doc(db, "favorites", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().items || [];
        } else {
            console.log("No favorites found for this user.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching favorites:", error);
        throw error;
    }
};
