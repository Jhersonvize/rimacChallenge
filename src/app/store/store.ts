import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/lib/constants';
import planSlice from './slices/plan/planSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'plan'],
};

const rootReducer = combineReducers({
  user: userSlice,
  plan: planSlice
});
const persist = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
