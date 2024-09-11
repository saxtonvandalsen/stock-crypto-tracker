// Handling user input of stock ticker and dispatching an action to fetch stock data from API

import React, {useState } from 'react'; // Hook to manage local component state
import { useDispatch } from 'react-redux'; // To dispatch actions to the Redux store
import { fetchStockData } from '../redux/actions'; // Fetching stock data by ticker


function StockForm() {

    // To update state when input changes
    const [ticker, setTicker] = useState('');

    // Accesses dispatch function and sends actons to Redux store
    const dispatch = useDispatch();

    // Function runs when user presses submit button on form but prevents
    // the default form behavior (page refresh) and fetchs the stock data
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchStockData(ticker));
    };

    // JSX to handle the text input field where the user can type in 
    // the stock ticker and submit
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter stock ticker"
            />
            <button type="submit">Fetch Stock Data</button>
        </form>
    );
}

// Available for import and use in other files
export default StockForm;