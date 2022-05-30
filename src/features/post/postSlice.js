import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`${URL}?_start=0&_limit=5`);
    dispatch(setPosts(res.data));
  }
);

export const deletePostById = createAsyncThunk(
  'posts/deletePostById',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`${URL}/${id}`);
    dispatch(deletePost(id));
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    // getPosts
    [getPosts.pending]: () => console.log('getPosts pending'),
    [getPosts.fulfilled]: () => console.log('getPosts fulfilled'),
    [getPosts.rejected]: () => console.log('getPosts rejected'),

    // deletePostById
    [deletePostById.pending]: () => console.log('deletePostById pending'),
    [deletePostById.fulfilled]: () => console.log('deletePostById fulfilled'),
    [deletePostById.rejected]: () => console.log('deletePostById rejected'),
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
