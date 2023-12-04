import { configureStore } from '@reduxjs/toolkit';
import { musicApi } from './services/api';
import backgroundTheme from './reducers/backgroundTheme/backgroundTheme.reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
    reducer: {
        backgroundTheme,
        [musicApi.reducerPath]: musicApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([musicApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
