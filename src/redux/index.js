import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import {app} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cacheMovies'],
};

const rootStore = configureStore({
  reducer: combineReducers({
    appReducer: persistReducer(persistConfig, app),
  }),
  middleware: [thunk],
});

export const store = rootStore;
export const persistor = persistStore(store);
