import { configureStore } from '@reduxjs/toolkit';
import serverReducer from './serverSlice';

const store = configureStore({
    reducer: {
        server: serverReducer
    }
});

export default store;