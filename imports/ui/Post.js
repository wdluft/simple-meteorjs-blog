import React from 'react';
import { Posts } from '../api/posts';

const Post = ({ post }) => {
  const { title, body, _id, createdAt } = post;

  const dateAsString = createdAt.toString();

  const deletePost = () => {
    Posts.remove(_id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{dateAsString}</p>
      <p>{body}</p>
      <button type='button' onClick={deletePost}>
        Remove Post
      </button>
    </div>
  );
};

export default Post;
