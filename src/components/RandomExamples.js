import React from 'react';
import symbolsData from '../assets/symbols.json';

const getRandomExamples = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const RandomExamples = () => {
    const randomStockTickers = getRandomExamples(symbolsData.stockTickers, 3);
    const randomCryptoSymbols = getRandomExamples(symbolsData.cryptoSymbols, 3);

    return (
        <div>
            <h3>Example Stock Tickers: {randomStockTickers.join(', ')}</h3>
            <h3>Example Crypto Symbols: {randomCryptoSymbols.join(', ')}</h3>
        </div>
    );
}

export default RandomExamples;