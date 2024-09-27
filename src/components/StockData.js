import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveFavoriteItem, fetchFavorites } from '../firebase/firestoreService';
import { getAuth } from 'firebase/auth';
import { fetchStockData } from '../redux/actions';

function StockData() {
    const dispatch = useDispatch();
    const stockData = useSelector(state => state.stockData);
    const [favorites, setFavorites] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserFavorites = async () => {
            if (user) {
                const userFavorites = await fetchFavorites(user.uid);
                // Filter to include only stocks based on a property like symbol format or a tag
                const stockFavorites = userFavorites.filter(fav => fav.type === 'stock');
                setFavorites(stockFavorites);
            }
        };

        fetchUserFavorites();
    }, [user]);

    if (!stockData || stockData.length === 0) return null;

    const stock = stockData[0];

    const handleSaveFavorite = async () => {
        if (user) {
            try {
                await saveFavoriteItem(user.uid, stockData, 'stock');
                alert('Stock saved to favorites!');
                // Fetch and set updated favorites
                const updatedFavorites = await fetchFavorites(user.uid);
                const stockFavorites = updatedFavorites.filter(fav => fav.type === 'stock');
                setFavorites(stockFavorites);
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
            <h2>Stock Data</h2>
            <p>Company Name: {stock.companyName}</p>
            <p>Company Ticker: {stock.symbol}</p>
            <p>Current Price: {stock.price}</p>
            <p>Market Cap: {stock.mktCap}</p>
            <p>Average Volume: {stock.volAvg}</p>
            <p>Yearly Range: {stock.range}</p>

            <button onClick={handleSaveFavorite}>Save to Favorites</button>

            {favorites.length > 0 && (
                <div>
                    <h3>Your Favorite Stocks</h3>
                    <ul>
                        {favorites.map((favorite, index) => (
                            <li key={index} onClick={() => handleFetchFavorite(favorite.item[0].symbol)}>
                                {favorite.item[0].companyName} ({favorite.item[0].symbol})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default StockData;
