// Works with StockForm component so when a user submitsa stock ticker in StockForm,
// data is fetched and stored in Redux. StockData then retrieves and displays the data

import React from 'react';
import { useSelector } from 'react-redux';
import { saveFavoriteItem } from '../firebase/firestoreService';
import { getAuth } from 'firebase/auth';

function StockData() {
    // Hold data returned by API. It's retrieved by global state
    const stockData = useSelector(state => state.stockData);

    if (!stockData || stockData.length === 0) return null;

    // Accessing array
    const stock = stockData[0];

    const handleSaveFavorite = async () => {
      const auth = getAuth();
      const user = auth.currentUser; // Get the currently signed-in user

        if (user) {
          try {
            await saveFavoriteItem(user.uid, stockData);
            alert('Stock saved to favorites!');
          } catch (error) {
            console.error('Error saving favorite:', error);
            alert('Failed to save favorite. Please try again.');
          }
        } else {
          alert('Please sign in to save your favorites.');
        }
    };

    // Rendering stock data. stockData info to be displayed
    // if not null
    return (
        <div>
            <h2>Stock Data</h2>
            <p>Company Name: {stock.companyName}</p>
            <p>Company Ticker: {stock.symbol}</p>
            <p>Current price: {stock.price}</p>
            <p>Market Cap: {stock.mktCap}</p>
            <p>Average Volume: {stock.volAvg}</p>
            <p>Yearly Range: {stock.range}</p>

            <button onClick={handleSaveFavorite}>Save to Favorites</button>
        </div>
    );
}

export default StockData;