// Action types for fetching stock and crypto data
export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';
export const FETCH_CRYPTO_DATA = 'FETCH_CRYPTO_DATA';

const apiKey = process.env.REACT_APP_API_KEY;

// Action creator for fetching stock data from Company Profile API
export const fetchStockData = (ticker) => async (dispatch) => {
   try {
        // Asynchronous request to fetch stock data based on provided ticker input
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${apiKey}`);
        const data = await response.json();

        if (data.length === 0) {
            throw new Error('Invalid ticker or no data available.');
        }

        // Dispatch action to update Redux state with fetched stock data
        dispatch({ type: FETCH_STOCK_DATA, payload: data });
   } catch (error) {
        console.error('Error fetching stock data:', error);
        dispatch({ type: FETCH_STOCK_DATA, payload: null, error: error.message });
   }
};

// Action creator for fetching cryptocurrency data from Full Crypto Quote API
export const fetchCryptoData = (symbol) => async (dispatch) => {
   try {
        // Asychronous request to fetch crypto data based on provided symbol input
        const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`);
        const data = await response.json();

        if (data.length === 0) {
            throw new Error('Invalid ticker or no data available.');
        }

        // Dispatch action to update Redux state with fetched crypto data
        dispatch({ type: FETCH_CRYPTO_DATA, payload: data });
   } catch (error) {
        console.error('Error fetching crypto data:', error);
        dispatch({ type: FETCH_CRYPTO_DATA, payload: null, error: error.message });
   }
};