import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import the initialized Firestore instance

export const saveFavoriteItem = async (uid, itemData, type) => {
    try {
        const docRef = doc(db, "favorites", uid); // Reference to user-specific favorites
        const docSnap = await getDoc(docRef);

        let favorites = [];

        if (docSnap.exists()) {
            favorites = docSnap.data().items || [];
        }

        // Check if the favorite already exists to avoid duplicates
        const existing = favorites.find(
            (fav) => fav.item[0].symbol === itemData[0].symbol && fav.type === type
        );

        if (!existing) {
            favorites.push({ item: itemData, type }); // Add the type ('stock' or 'crypto')
            await setDoc(docRef, { items: favorites });
            console.log(`${type} saved successfully:`, favorites);
        } else {
            console.log(`${type} already exists in favorites.`);
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
