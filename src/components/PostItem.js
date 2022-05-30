import React from 'react';

import { useDispatch } from 'react-redux';
import { deletePostById } from '../features/post/postSlice';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className='Post'>
      <h3>{post.title.substring(0, 25)}</h3>
      <button
        className='PostDelete'
        onClick={() => dispatch(deletePostById(post.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default PostItem;
