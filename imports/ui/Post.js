import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';
import { Link } from 'react-router-dom';

const PostList = ({ post, currentUser }) => {
  const { title, body, _id, createdAt } = post;

  const dateAsString = createdAt.toString();

  const deletePost = () => {
    Meteor.call('posts.remove', _id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <Link to={`/posts/${_id}`}>Read Post</Link>
      <p>{dateAsString}</p>
      <p>{body}</p>

      {currentUser ? (
        <button type='button' onClick={deletePost}>
          Remove Post
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default PostList;
