
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import StockForm from './components/StockForm';
import CryptoForm from './components/CryptoForm';
import StockData from './components/StockData';
import CryptoData from './components/CryptoData';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Stock & Crypto Dashboard</h1>
                <StockForm />
                <CryptoForm />
                <StockData />
                <CryptoData />
            </div>
        </Provider>
    )
}