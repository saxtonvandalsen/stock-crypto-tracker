import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../firebase/firestoreService';
import { getAuth } from 'firebase/auth';
import { fetchCryptoData } from '../redux/actions';

const CryptoFavorites = () => {
    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserFavorites = async () => {
            if (user) {
                const userFavorites = await fetchFavorites(user.uid);
                // Filter to include only cryptos based on a property like symbol format or a tag
                const cryptoFavorites = userFavorites.filter(fav => fav.item[0].type === 'crypto'); 
                setFavorites(cryptoFavorites);
            }
        };
        fetchUserFavorites();
    }, [user]);

    const handleFetchFavorite = (cryptoSymbol) => {
        dispatch(fetchCryptoData(cryptoSymbol));
    };

    return (
        <div>
            <h3>Your Favorite Cryptos</h3>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((favorite, index) => (
                        <li key={index} onClick={() => handleFetchFavorite(favorite.item[0].symbol)}>
                            {favorite.item[0].name} ({favorite.item[0].symbol})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorite cryptos found.</p>
            )}
        </div>
    );
};

export default CryptoFavorites;
