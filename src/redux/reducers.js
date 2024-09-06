
import { FETCH_STOCK_DATA, FETCH_CRYPTO_DATA } from "./actions";

const initialState = {
    stockData: null,
    cryptoData: null,
};

const reducer = (state = initialState, action) => {
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