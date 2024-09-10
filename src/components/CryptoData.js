// Component works with CryptoForm component so when a user submits a crypto coin symbol
// in CryptoForm, data is fetched and stored in Redux. CryptoData then retrieves and displays

import React from 'react';
import { useSelector } from 'react-redux'; // Hook to access data from Redux store (global state)

// Displays crypto data fetched from application state. Data is retrieved using Redux useSelector
// hook and rendered in JSX. If no data is available, componenet returns null
function CryptoData() {
    // Retrieve crypto data from Redux state
    const cryptoData = useSelector(state => state.cryptoData);

    if (!cryptoData) return null;

    // Render the crypto data inside a div
    return (
        <div>
            <h2>Crypto Data</h2>
            <p>Crypto Name: {cryptoData.name}</p>
            <p>Crypto Symbol: {cryptoData.symbol}</p>
            <p>Price: {cryptoData.price}</p>
            <p>Market Cap: {cryptoData.marketCap}</p>
            <p>Year Low Price: {cryptoData.yearLow}</p>
            <p>Year High Price: {cryptoData.yearHigh}</p>
        </div>
    );
}

export default CryptoData;