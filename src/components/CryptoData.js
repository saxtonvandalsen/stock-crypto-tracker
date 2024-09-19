// Component works with CryptoForm component so when a user submits a crypto coin symbol
// in CryptoForm, data is fetched and stored in Redux. CryptoData then retrieves and displays

import React from 'react';
import { useSelector } from 'react-redux'; // Hook to access data from Redux store (global state)
import { saveFavoriteItem } from '../firebase/firestoreService';

// Displays crypto data fetched from application state. Data is retrieved using Redux useSelector
// hook and rendered in JSX. If no data is available, componenet returns null
function CryptoData() {
    // Retrieve crypto data from Redux state
    const cryptoData = useSelector(state => state.cryptoData);

    if (!cryptoData || cryptoData.length === 0) return null;

    // Accessing array
    const crypto = cryptoData[0];

    const handleSaveFavorite = async () => {
        if (user) {
          await saveFavoriteItem(user.uid, cryptoData);
        } else {
          alert('Please sign in to save your favorites.');
        }
    };

    // Render the crypto data inside a div
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
        </div>
    );
}

export default CryptoData;