import React from 'react';
import symbolsData from '../assets/symbols.json';
import '../styles.css';

const getRandomExamples = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const RandomExamples = () => {
    const randomStockTickers = getRandomExamples(symbolsData.stockTickers, 3);
    const randomCryptoSymbols = getRandomExamples(symbolsData.cryptoSymbols, 3);

    return (
        <div className="random-examples-container">
            <div className="example-section">
                <h4>Example Stock Tickers:</h4>
                <p>{randomStockTickers.join(', ')}</p>
            </div>
            <div className="example-section">
                <h4>Example Crypto Symbols</h4>
                <p>{randomCryptoSymbols.join(', ')}</p>
            </div>
        </div>
    );
}

export default RandomExamples;