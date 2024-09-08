import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the DOM element with id=root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);