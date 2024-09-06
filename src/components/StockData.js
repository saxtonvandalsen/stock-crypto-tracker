//
import React from 'react';
import { useSelector } from 'react-redux';

function StockData() {
    const stockData = useSelector(state => state.stockData);

    if (!stockData) return null;

    return (
        <div>
            <h2>Stock Data</h2>
            <p>Price: {stockData.price}</p>
            <p>Market Cap: {stockData.marketCap}</p>
            
        </div>
    );
}

export default stockData;