import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';
import storage from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/lib/persistReducer';
import planSlice from './slices/plan/planSlice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'storage',
  storage,
  whitelist: ['user', 'plan'],
};

const rootReducer = combineReducers({
  user: userSlice,
  plan: planSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
