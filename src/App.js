
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import StockForm from './components/StockForm';
import CryptoForm from './components/CryptoForm';
import StockData from './components/StockData';
import CryptoData from './components/CryptoData';
import RandomExamples from './components/RandomExamples';

// Provider component wraps entire App and passes Redux store to all
// child components. App contains the dashboard's layout.
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Stock & Crypto Dashboard</h1>
                <p></p>
                <RandomExamples />
                <p></p>
                <StockForm />
                <p></p>
                <CryptoForm />
                <p></p>
                <StockData />
                <p></p>
                <CryptoData />
            </div>
        </Provider>
    );
}

export default App;