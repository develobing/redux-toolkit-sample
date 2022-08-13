import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/post/postSlices.js';

const Posts = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { posts, loading, error } = post;

  const getPosts = () => {
    dispatch(fetchPosts());
  };

  return (
    <div>
      <h1>Post List</h1>
      <button onClick={getPosts}>Fetch posts</button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts?.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
