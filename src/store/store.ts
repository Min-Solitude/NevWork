import { configureStore } from '@reduxjs/toolkit';
import { authApi, musicApi } from './services/api';
import backgroundTheme from './reducers/backgroundTheme/backgroundTheme.reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
    reducer: {
        backgroundTheme,
        [musicApi.reducerPath]: musicApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([musicApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
