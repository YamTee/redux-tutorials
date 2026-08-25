import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state) => {
      state.icecreams = state.icecreams - 1;
    },
    restockIcecream: (state, action) => {
      state.icecreams = state.icecreams + action.payload;
    },
  },
});

export const { orderIcecream, restockIcecream } = icecreamSlice.actions;

export default icecreamSlice.reducer;
