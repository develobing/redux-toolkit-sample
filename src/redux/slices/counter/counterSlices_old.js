import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const increaseByAmount = createAction('counter/increaseByAmount');

console.log('increment', increment);
console.log('[increment]', [increment]);

// Reducers
// 1. using builder notation
const initialState = {
  value: 0,
};

/* Builder callback notation */
// export const counterSlices = createReducer(initialState, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state.value++;
//   });

//   builder.addCase(decrement, (state, action) => {
//     state.value--;
//   });

//   builder.addCase(increaseByAmount, (state, action) => {
//     const { amount } = action?.payload || {};
//     state.value += amount || 0;
//   });
// });

/* Map object notation */
export const counterSlices = createReducer(initialState, {
  // [increment]: (state, action) => {
  //   state.value++;
  // },

  'counter/increment': (state, action) => {
    state.value++;
  },

  [decrement]: (state, action) => {
    state.value--;
  },

  [increaseByAmount]: (state, action) => {
    const { amount } = action?.payload || {};
    state.value += amount || 0;
  },
});
