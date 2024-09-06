// 
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptoData } from '../redux/actions';

function CryptoForm() {
    const [symbol, setSymbol] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchCryptoData(symbol));
    };

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

export default CryptoForm;
