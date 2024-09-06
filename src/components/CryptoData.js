//
import React from 'react';
import { useSelector } from 'react-redux';

function CryptoData() {
    const cryptoData = useSelector(state => state.cryptoData);

    if (!cryptoData) return null;

    return (
        <div>
            <h2>Crypto Data</h2>
            <p>Price: {cryptoData.price}</p>
            <p>Market Cap: {cryptoData.marketCap}</p>
            {/* Add more data fields as needed */}
        </div>
    );
}

export default CryptoData;