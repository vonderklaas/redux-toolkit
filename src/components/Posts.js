import React from 'react';
import PostItem from './PostItem';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../features/post/postSlice';

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getPosts())} type='submit'>
        Fetch posts
      </button>
      <div className='Posts'>
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
