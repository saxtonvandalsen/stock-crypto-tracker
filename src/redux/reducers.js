// Reducer checks for these action types and updates the state with fetched data
import { FETCH_STOCK_DATA, FETCH_CRYPTO_DATA } from "./actions";

// Set initial state for stock and crypto data to null
const initialState = {
    stockData: null,
    cryptoData: null,
    error: null
};

// Reducer function to manage state updates for stock and crypto data. State
// is updated based on action type dispatched.
const reducer = (state = initialState, action) => {
    
    // Using spread operator to ensure to maintian rest of state, for
    // immutability
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
                return { ...state, cryptoData: action.payload, error: action.error };
            }       
        default:
            return state;
    }
};

export default reducer;