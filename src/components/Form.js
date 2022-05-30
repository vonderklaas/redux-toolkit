import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { v4 } from 'uuid';

const Form = () => {
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (todoValue.length < 1) {
      console.log('Add a value!');
    } else {
      const todo = {
        id: v4(),
        text: todoValue,
        completed: false,
      };
      dispatch(addTodo(todo));
      setTodoValue('');
    }
  };

  return (
    <form className='Form' onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        value={todoValue}
        placeholder='Add a todo...'
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={addTodoHandler} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
