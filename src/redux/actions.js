export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';
export const FETCH_CRYPTO_DATA = 'FETCH_CRYPTO_DATA';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchStockData = (ticker) => async (dispatch) => {
   try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=${apiKey}`);
        const data = await response.json();

        if (data.length === 0) {
            throw new Error('Invalid ticker or no data available.');
        }

        dispatch({ type: FETCH_STOCK_DATA, payload: data });
   } catch (error) {
        console.error('Error fetching stock data:', error);
        dispatch({ type: FETCH_STOCK_DATA, payload: null, error: error.message });
   }
};

export const fetchCryptoData = (symbol) => async (dispatch) => {
   try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`);
        const data = await response.json();

        if (data.length === 0) {
            throw new Error('Invalid ticker or no data available.');
        }

        dispatch({ type: FETCH_CRYPTO_DATA, payload: data });
   } catch (error) {
        console.error('Error fetching crypto data:', error);
        dispatch({ type: FETCH_CRYPTO_DATA, payload: null, error: error.message });
   }
};