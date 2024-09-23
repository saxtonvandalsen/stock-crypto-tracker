import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../firebase/firestoreService';
import { getAuth } from 'firebase/auth';
import { fetchCryptoData } from '../redux/actions';

const CryptoFavorites = () => {
    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);
    
    const auth = getAuth();
    const user = auth.currentUser;

    // Fetch user's favorite crypto items
    useEffect(() => {
        const fetchUserFavorites = async () => {
            if (user) {
                const userFavorites = await fetchFavorites(user.uid);
                setFavorites(userFavorites);
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