import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../firebase/firestoreService';
import { getAuth } from 'firebase/auth';
import { fetchStockData } from '../redux/actions';

const StockFavorites = () => {
    const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserFavorites = async () => {
            if (user) {
                const userFavorites = await fetchFavorites(user.uid);
                // Filter to include only stocks based on a property like symbol format or a tag
                const stockFavorites = userFavorites.filter(fav => fav.item[0].type === 'stock');
                setFavorites(stockFavorites);
            }
        };
        fetchUserFavorites();
    }, [user]);

    const handleFetchFavorite = (stockSymbol) => {
        dispatch(fetchStockData(stockSymbol));
    };

    return (
        <div>
            <h3>Your Favorite Stocks</h3>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((favorite, index) => (
                        <li key={index} onClick={() => handleFetchFavorite(favorite.item[0].symbol)}>
                            {favorite.item[0].companyName} ({favorite.item[0].symbol})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorite stocks found.</p>
            )}
        </div>
    );
};

export default StockFavorites;
