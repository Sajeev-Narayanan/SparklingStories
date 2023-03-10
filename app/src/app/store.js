import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userGoogleAuthSlice from "../features/userGoogleAuthSlice";


const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}

const reducer = combineReducers({
    
    auth: authSlice,
    loginGoogle : userGoogleAuthSlice,
  });

const persistedReducer = persistReducer(persistConfig, reducer) // create a persisted reducer

const store = configureStore({
    reducer: persistedReducer,
    // reducer: {
    //     auth : authSlice
    // }
})


const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export {store, persistor}