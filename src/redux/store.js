// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from "@reduxjs/toolkit";

// import { thunk } from "redux-thunk";
// import { cakeStoreReducer } from "./cakeStore/cakeStoreReducer";
// import { icecreamStoreReducer } from "./icecreamStore/icecreamStoreReducer";
// import { userReducer } from "./users/userReducer";

import { createLogger } from "redux-logger";

const logger = createLogger();

// const combinedReducers = combineReducers({
//   cake: cakeStoreReducer,
//   icecream: icecreamStoreReducer,
//   user: userReducer,
// });

// export const store = createStore(
//   combinedReducers,
//   applyMiddleware(logger, thunk),
// );

import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "./cakeStore/cakeSlice";

import icecreamReducer from "./icecreamStore/icecreamSlice";
import userReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
