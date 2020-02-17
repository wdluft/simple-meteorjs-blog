import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';
import { Link } from 'react-router-dom';

const PostList = ({ post, currentUser }) => {
  const { title, body, _id, createdAt } = post;

  const dateAsString = createdAt.toString();

  const bodyPreview = () => {
    let shortBody = body.split('');
    return shortBody.splice(0, 50).join('');
  };

  const deletePost = () => {
    Meteor.call('posts.remove', _id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{dateAsString}</p>
      <p>
        {bodyPreview()}...
        <Link to={`/posts/${_id}`}>Read Post</Link>
      </p>

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
