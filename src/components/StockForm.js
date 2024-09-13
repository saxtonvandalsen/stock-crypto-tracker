// Handling user input of stock ticker and dispatching an action to fetch stock data from API

import React, { useState, useEffect } from 'react'; // Hook to manage local component state
import { useDispatch, useSelector } from 'react-redux'; // To dispatch actions to the Redux store
import { fetchStockData } from '../redux/actions'; // Fetching stock data by ticker


function StockForm() {

    // State to track input and error/success messages
    const [ticker, setTicker] = useState('');
    const [message, setMessage] = useState(''); // For displaying feedback messages
    const [messageType, setMessageType] = useState(''); // To differientate success or error messages

    // Accesses dispatch function and sends actons to Redux store
    const dispatch = useDispatch();

    // Access stock data and error from Redux
    const stockData = useSelector(state => state.stockData);
    const error = useSelector(state => state.error);

    useEffect(() => {
        // If there's stock data and no error, clear the error message
        if (stockData && !error) {
            setMessageType('success');
            setMessage('Fetching data for ticker.');
        } else if (error) {
            setMessageType('error');
            setMessage('Please enter a valid stock ticker.');
        }
    }, [stockData, error]);

    // Function runs when user presses submit button on form but prevents
    // the default form behavior (page refresh) and fetchs the stock data
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if input is empty or invalid
        if(!ticker.trim()) {
            setMessageType('error');
            setMessage("Please enter a valid stock ticker.");
            return;
        }

        // If valid, dispatch action to fetch stock data via Redux action
        dispatch(fetchStockData(ticker));
        //setMessageType('success');
        //setMessage(`Fetching data for ticker: ${ticker}`);
        
        // Clear input field after submission
        setTicker('');
    };

    // JSX to handle the text input field where the user can type in 
    // the stock ticker and submit
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value)}
                    placeholder="Enter stock ticker"
                />
                <button type="submit">Fetch Stock Data</button>
            </form>

            {/* Test message 
            {message && (
                <p style={{ color: messageType === 'error' ? 'red' : 'green'}}>
                    {message}
                </p> 
            )} */}
            {messageType === 'error' && <p style={{ color: 'red' }}>{message}</p>}
            {messageType === 'success' && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
}

// Available for import and use in other files
export default StockForm;