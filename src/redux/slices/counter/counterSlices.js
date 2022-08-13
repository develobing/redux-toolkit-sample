import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  value: 0,
};

export const counterSlices = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    increment: (state, action) => {
      state.value++;
    },

    decrement: (state, action) => {
      state.value--;
    },

    increaseByAmount: (state, action) => {
      const { amount } = action?.payload || {};
      state.value += amount || 0;
    },
  },
});

// Generate the actions
export const { increment, decrement, increaseByAmount } = counterSlices.actions;

// Export the reducer
export default counterSlices.reducer;
