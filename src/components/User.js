import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName } from '../features/user/userSlice';

const User = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Your name'
          onChange={(e) => dispatch(setFirstName(e.target.value))}
        />
      </div>
      <br />
      <div>
        <input
          type='text'
          placeholder='Your lastname'
          onChange={(e) => dispatch(setLastName(e.target.value))}
        />
      </div>
      <div className='Name'>
        <h3>
          {name} {lastName}
        </h3>
      </div>
    </>
  );
};

export default User;
