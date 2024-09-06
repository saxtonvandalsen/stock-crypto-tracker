export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';
export const FETCH_CRYPTO_DATA = 'FETCH_CRYPTO_DATA';

// 
export const fetchStockData = (ticker) => async (dispatch) => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apiKey=YOUR_API_KEY`);
    const data = await response.json();
    dispatch({ type: FETCH_STOCK_DATA, payload: data });
};

export const fetchCryptoData = (symbol) => async (dispatch) => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apiKey=YOUR_API_KEY`);
    const data = await response.json();
    dispatch({ type: FETCH_CRYPTO_DATA, payload: data });
};