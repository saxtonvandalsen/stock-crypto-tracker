// Action types for fetching stock and crypto data
export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';
export const FETCH_CRYPTO_DATA = 'FETCH_CRYPTO_DATA';

// Action creator for fetching stock data from Company Profile API
export const fetchStockData = (ticker) => async (dispatch) => {
    // Asynchronous request to fetch stock data based on provided ticker input
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apiKey=YOUR_API_KEY`);
    const data = await response.json();

    // Dispatch action to update Redux state with fetched stock data
    dispatch({ type: FETCH_STOCK_DATA, payload: data });
};

// Action creator for fetching cryptocurrency data from Full Crypto Quote API
export const fetchCryptoData = (symbol) => async (dispatch) => {
    // Asychronous request to fetch crypto data based on provided symbol input
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apiKey=YOUR_API_KEY`);
    const data = await response.json();

    // Dispatch action to update Redux state with fetched crypto data
    dispatch({ type: FETCH_CRYPTO_DATA, payload: data });
};