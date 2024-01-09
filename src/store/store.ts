import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    PersistConfig,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { AuthReducer } from './reducers/auth/auth.reducer';
import { ModeReducer } from './reducers/mode/mode.reducer';
import { MusicReducer } from './reducers/music/music.reducer';
import { NoticeReducer } from './reducers/notice/notice.reducer';
import { AltarReducer } from './reducers/altar/altar.reducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    mode: ModeReducer,
    music: MusicReducer,
    notice: NoticeReducer,
    altar: AltarReducer
});

type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }),
});

export const persistor = persistStore(store);

export default store;
