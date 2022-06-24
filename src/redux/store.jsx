import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { mySlice } from './slice';
// import { getPersistConfig } from 'redux-deep-persist';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  myValue: mySlice.reducer,
});



const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['myValue.contacts.items'],

  blacklist: ['myValue.contacts.items.filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
