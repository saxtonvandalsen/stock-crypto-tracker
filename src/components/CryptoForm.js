// Handling user input of crypto coin symbol and dispatching an action to fetch stock data

import React, { useState, useEffect } from 'react'; // Hook to manage local component state
import { useDispatch, useSelector } from 'react-redux'; // To dispatch actions to the Redux stor
import { fetchCryptoData } from '../redux/actions'; // Fetching stock data by ticker

function CryptoForm() {

    // To update state when input changes
    const [symbol, setSymbol] = useState('');
    const [message, setMessage] = useState(''); // For Displaying feedback messages
    const [messageType, setMessageType] = useState(''); // To differientate success or error messages

    // Accesses dispatch function and used to send actons to Redux store
    const dispatch = useDispatch();

    // Access crypto data via Redux
    const cryptoData = useSelector(state => state.cryptoData);
    const error = useSelector(state => state.error);

    useEffect(() => {
        // If there's stock data and no error, clear the error message
        if (cryptoData && !error) {
            setMessageType('success');
            setMessage('Fetching data for crypto coin.');
        } else if (error) {
            setMessageType('error');
            setMessage('Please enter a valid crypto symbol.');
        }
    }, [cryptoData, error]);

    // Function runs when user presses submit button on form but prevents
    // the default form behavior (page refresh) and fetchs the stock data
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if input is empty or invalid
        if(!symbol.trim()) {
            setMessageType('error');
            setMessage("Please enter a valid stock ticker.");
            return;
        }

        // If valid, dispatch action to fetch crypto data via Redux action
        dispatch(fetchCryptoData(symbol));

        // To clear input field after submission
        setSymbol('');
    };

    // JSX to handle the text input field where the user can type in 
    // the crypto coin symbol and submit
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    placeholder="Enter crypto symbol"
                />
                <button type="submit">Fetch Crypto Data</button>
            </form>

            {messageType === 'error' && <p style={{ color: 'red' }}>{message}</p>}
            {messageType === 'success' && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
}

// Available for import and use in other files
export default CryptoForm;