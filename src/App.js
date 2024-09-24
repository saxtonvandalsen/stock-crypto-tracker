import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import store from './redux/store';
import StockForm from './components/StockForm';
import CryptoForm from './components/CryptoForm';
import StockData from './components/StockData';
import CryptoData from './components/CryptoData';
import RandomExamples from './components/RandomExamples';
import SignInSignUp from './components/SignInSignUp';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import CryptoFavorites from './components/CryptoFavorites';
import StockFavorites from './components/StockFavorites';

// Provider component wraps entire App and passes Redux store to all child components. App contains the dashboard's layout.
function App() {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        // Listen for changes in the user's sign-in state
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [auth]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out!");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <div className="header-container">
                        <header className='main-header'>
                            Stock & Crypto Tracker Dashboard
                        </header>

                        {user ? (
                            <button className="top-right-button" onClick={handleSignOut}>
                                Sign Out
                            </button>
                        ) : (
                            <Link to="/signin">
                                <button className="top-right-button">
                                    Sign In
                                </button>
                            </Link>
                        )}
                    </div>

                    <Routes>
                        {/* Main Dashboard (Stock/Crypto Sections) */}
                        <Route path="/" element={
                            <>
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
                            </>
                        } />

                        {/* Favorites Sections */}
                        <Route path="/favorites" element={
                            <div className="favorites-sections">
                                <div className="crypto-favorites">
                                    <CryptoFavorites />
                                </div>
                                <div className="stock-favorites">
                                    <StockFavorites />
                                </div>
                            </div>
                        } />

                        {/* Sign In/Sign Up Page */}
                        <Route path="/signin" element={<SignInSignUp />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
