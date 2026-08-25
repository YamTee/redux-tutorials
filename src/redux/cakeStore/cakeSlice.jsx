import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cakes: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state) => {
      state.cakes = state.cakes - 1;
    },
    restockCake: (state, action) => {
      state.cakes = state.cakes + action.payload;
    },
  },
});

export const { orderCake, restockCake } = cakeSlice.actions;

export default cakeSlice.reducer;
