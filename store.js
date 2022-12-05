import { configureStore } from '@reduxjs/toolkit';
import NavReducer from './slices/NavSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
});