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
                <div className="header-container">
                    <header className='main-header'>
                        Stock & Crypto Tracker Dashboard
                    </header>
                </div>

                <p></p>
                <RandomExamples />
                <p></p>

                <div className='container'>
                    {/* Stock Section on the Left */}
                    <div className="section">
                        <h2>Stock Tracker</h2>
                        <StockForm />
                        <StockData />
                    </div>

                    {/* Crypto Section on the Right */}
                    <div className="section">
                        <h2>Crypto Tracker</h2>
                        <CryptoForm />
                        <CryptoData />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;