import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../redux/actions';

function StockForm() {
    const [ticker, setTicker] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchStockData(ticker));
    };

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

export default StockForm;