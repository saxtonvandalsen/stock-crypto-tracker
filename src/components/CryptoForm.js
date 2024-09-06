// Handling user input of crypto coin symbol and dispatching an action to fetch stock data

import React, { useState } from 'react'; // Hook to manage local component state
import { useDispatch } from 'react-redux'; // To dispatch actions to the Redux stor
import { fetchCryptoData } from '../redux/actions'; // Fetching stock data by ticker

function CryptoForm() {

    // To update state when input changes
    const [symbol, setSymbol] = useState('');

    // Accesses dispatch function and used to send actons to Redux store
    const dispatch = useDispatch();

    // Function runs when user presses submit button on form but prevents
    // the default form behavior (page refresh) and fetchs the stock data
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchCryptoData(symbol));
    };

    // JSX to handle the text input field where the user can type in 
    // the crypto coin symbol and submit
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="Enter crypto symbol"
            />
            <button type="submit">Fetch Crypto Data</button>
        </form>
    );
}

// Available for import and use in other files
export default CryptoForm;