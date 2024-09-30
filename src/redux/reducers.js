import { FETCH_STOCK_DATA, FETCH_CRYPTO_DATA } from "./actions";

const initialState = {
    stockData: null,
    cryptoData: null,
    error: null
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_STOCK_DATA:
            if (action.payload) {
                return { ...state, stockData: action.payload, error: null };
            } else {
                return { ...state, stockData: null, error: action.error };
            }
        case FETCH_CRYPTO_DATA:
            if (action.payload) {
                return { ...state, cryptoData: action.payload, error: null };
            } else {
                return { ...state, cryptoData: null, error: action.error };
            }       
        default:
            return state;
    }
};

export default reducer;