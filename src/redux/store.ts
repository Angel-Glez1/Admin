import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});


export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type GetState = () => AppStore;





















