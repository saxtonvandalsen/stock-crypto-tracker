import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveFavoriteItem, fetchFavorites } from '../firebase/firestoreService';
import { getAuth } from 'firebase/auth';
import { fetchCryptoData } from '../redux/actions';

function CryptoData() {
    const dispatch = useDispatch();
    const cryptoData = useSelector(state => state.cryptoData);
    const [favorites, setFavorites] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserFavorites = async () => {
            if (user) {
                const userFavorites = await fetchFavorites(user.uid);
                const cryptoFavorites = userFavorites.filter(fav => fav.type === 'crypto');
                setFavorites(cryptoFavorites);
            }
        };

        fetchUserFavorites();
    }, [user]);

    if (!cryptoData || cryptoData.length === 0) return null;

    const crypto = cryptoData[0];

    const handleSaveFavorite = async () => {
        if (user) {
            try {
                await saveFavoriteItem(user.uid, cryptoData, 'crypto');
                alert('Crypto saved to favorites!');
                
                const updatedFavorites = await fetchFavorites(user.uid);
                const cryptoFavorites = updatedFavorites.filter(fav => fav.type === 'crypto');
                setFavorites(cryptoFavorites);
            } catch (error) {
                console.error('Error saving favorite:', error);
                alert('Failed to save favorite. Please try again.');
            }
        } else {
            alert('Please sign in to save your favorites.');
        }
    };

    return (
        <div>
            <h2>Crypto Data</h2>
            <p>Crypto Name: {crypto.name}</p>
            <p>Crypto Symbol: {crypto.symbol}</p>
            <p>Price: {crypto.price}</p>
            <p>Market Cap: {crypto.marketCap}</p>
            <p>Year Low Price: {crypto.yearLow}</p>
            <p>Year High Price: {crypto.yearHigh}</p>

            <button onClick={handleSaveFavorite}>Save to Favorites</button>

            {favorites.length > 0 && (
                <div>
                    <h3>Your Favorite Cryptos</h3>
                    <ul>
                        {favorites.map((favorite, index) => (
                            <li key={index} onClick={() => handleFetchFavorite(favorite.item[0].symbol)}>
                                {favorite.item[0].name} ({favorite.item[0].symbol})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CryptoData;
