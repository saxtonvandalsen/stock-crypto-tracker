import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '../redux/actions';

function CryptoForm() {

    const [symbol, setSymbol] = useState('');
    const [message, setMessage] = useState(''); // For Displaying feedback messages
    const [messageType, setMessageType] = useState(''); // To differientate success or error messages

    const dispatch = useDispatch();

    const cryptoData = useSelector(state => state.cryptoData);
    const error = useSelector(state => state.error);

    useEffect(() => {
        if (cryptoData && !error) {
            setMessageType('success');
            setMessage('Fetching data for crypto coin.');
        } else if (error) {
            setMessageType('error');
            setMessage('Please enter a valid crypto coin symbol.');
        }
    }, [cryptoData, error]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!symbol.trim()) {
            setMessageType('error');
            setMessage("Please enter a valid crypto coin symbol.");
            return;
        }

        dispatch(fetchCryptoData(symbol));

        setSymbol('');
    };

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

export default CryptoForm;