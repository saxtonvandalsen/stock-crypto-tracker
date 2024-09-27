import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockData } from '../redux/actions';

function StockForm() {
    const [ticker, setTicker] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const dispatch = useDispatch();
    const stockData = useSelector(state => state.stockData);
    const error = useSelector(state => state.error);

    useEffect(() => {
        if (stockData && !error) {
            setMessageType('success');
            setMessage('Fetching data for ticker.');
        } else if (error) {
            setMessageType('error');
            setMessage('Please enter a valid stock ticker.');
        }
    }, [stockData, error]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!ticker.trim()) {
            setMessageType('error');
            setMessage('Please enter a valid stock ticker.');
            return;
        }

        dispatch(fetchStockData(ticker));
        setTicker('');
    };

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
            {messageType === 'error' && <p style={{ color: 'red' }}>{message}</p>}
            {messageType === 'success' && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
}

export default StockForm;
