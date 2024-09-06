import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'; // Import root reducer to manage state updates

// Create Redux store with thunk middleware to enable asychronous actions
// within action creators
const store = createStore(reducer, applyMiddleware(thunk));

export default store;