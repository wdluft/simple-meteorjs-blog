import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';
import { withTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router-dom';

const withPost = withTracker(({ postId }) => {
  const post = Posts.findOne({ _id: postId.postId });
  return {
    post,
  };
});

const withUser = withTracker(props => {
  const user = Meteor.user();
  return {
    user,
  };
});

// ACTUAL COMPONENT
const Post = ({ post, user }) => {
  let history = useHistory();

  if (post === undefined) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }

  const { title, body, _id, createdAt } = post;
  const dateAsString = createdAt.toString();
  const deletePost = () => {
    Meteor.call('posts.remove', _id);
    history.push('/posts');
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{dateAsString}</p>
      <p>{body}</p>

      {user ? (
        <button type='button' onClick={deletePost}>
          Remove Post
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

const Testing = withUser(withPost(Post));

export default Testing;
