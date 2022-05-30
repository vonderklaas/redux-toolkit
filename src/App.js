import React from 'react';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import User from './components/User';
import Posts from './components/Posts';
import { useSelector } from 'react-redux';

const App = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <h1 className='Title'>Redux Toolkit</h1>
      <div className='App'>
        <div className='Block'>
          <h2>State Changes</h2>
          <User />
        </div>
        <div className='Block'>
          <h2>C.R.U.D</h2>
          <Form />
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
        <div className='Block'>
          <h2>Async Thunk</h2>
          <Posts />
        </div>
      </div>
    </>
  );
};

export default App;
