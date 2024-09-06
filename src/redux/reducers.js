// Reducer checks for these action types and updates the state with fetched data
import { FETCH_STOCK_DATA, FETCH_CRYPTO_DATA } from "./actions";

// Set initial state for stock and crypto data to null
const initialState = {
    stockData: null,
    cryptoData: null,
};

// Reducer function to manage state updates for stock and crypto data. State
// is updated based on action type dispatched.
const reducer = (state = initialState, action) => {
    
    // Using spread operator to ensure to maintian rest of state, for
    // immutability
    switch (action.type) {
        case FETCH_STOCK_DATA:
            return { ...state, stockData: action.payload };
        case FETCH_CRYPTO_DATA:
            return { ...state, cryptoData: action.payload };
        default:
            return state;
    }
};

export default reducer;