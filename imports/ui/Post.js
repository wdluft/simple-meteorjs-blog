import React from 'react';
import { Posts } from '../api/posts';

const Post = ({ post }) => {
  const { title, body, _id } = post;

  const deletePost = () => {
    Posts.remove(_id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button type='button' onClick={deletePost}>
        Remove Post
      </button>
    </div>
  );
};

export default Post;
