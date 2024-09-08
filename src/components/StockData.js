// Works with StockForm component so when a user submitsa stock ticker in StockForm,
// data is fetched and stored in Redux. StockData then retrieves and displays the data

import React from 'react';
import { useSelector } from 'react-redux';

function StockData() {
    // Hold data returned by API. It's retrieved by global state
    const stockData = useSelector(state => state.stockData);

    if (!stockData) return null;

    // Rendering stock data. stockData info to be displayed
    // if not null
    return (
        <div>
            <h2>Stock Data</h2>
            <p>Price: {stockData.price}</p>
            <p>Market Cap: {stockData.marketCap}</p>
            
        </div>
    );
}

export default StockData;