import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      text: 'Learn React',
      id: 1,
      completed: false,
    },
    {
      text: 'Learn Redux Toolkit',
      id: 2,
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleCompletedTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
