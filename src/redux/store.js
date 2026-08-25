import {
  legacy_createStore as createStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { cakeStoreReducer } from "./cakeStore/cakeStoreReducer";
import { icecreamStoreReducer } from "./icecreamStore/icecreamStoreReducer";

const combinedReducers = combineReducers({
  cake: cakeStoreReducer,
  icecream: icecreamStoreReducer,
});

export const store = createStore(combinedReducers);
