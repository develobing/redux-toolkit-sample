import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter/counterSlices';
import postReducer from '../slices/post/postSlices';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});

export default store;
