import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleCompletedTodo, deleteTodo } from '../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className='Todo'>
      <button
        className={todo.completed ? 'TodoComplete' : 'TodoHasToBeComplete'}
        onClick={() => dispatch(toggleCompletedTodo(todo.id))}
      >
        Complete
      </button>
      <div
        style={{
          textDecoration: todo.completed ? 'line-through' : '',
        }}
      >
        {todo.text}
      </div>
      <button
        className='TodoDelete'
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
