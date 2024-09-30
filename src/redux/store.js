import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

// Create Redux store with thunk middleware to enable asychronous actions
// within action creators
const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store;