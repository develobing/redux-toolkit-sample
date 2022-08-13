import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create the action
export const fetchPosts = createAsyncThunk(
  'post/list',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      return data;
    } catch (err) {
      console.log('err', err);
      return rejectWithValue(err?.message);
    }
  }
);

// Slices
const postSlices = createSlice({
  name: 'post',
  initialState: {
    // posts: [],
    // loading: false,
    // error: null,
  },
  extraReducers: {
    // Handle pending state
    [fetchPosts.pending]: (state, action) => {
      state.loading = true;
    },

    // Handle fulfilled state
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },

    // Handle rejected state
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlices.reducer;
