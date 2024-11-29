import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCounter(state) {
      state.count = state.count + 1;
    },
    decreaseCounter(state) {
      state.count = state.count - 1;
    },
    resetCounter(state) {
      state.count = 0;
    },
  },
});

export const { increaseCounter, decreaseCounter, resetCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
