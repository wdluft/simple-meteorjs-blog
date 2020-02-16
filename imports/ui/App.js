import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts';

// Components
import Post from './Post';
import NewPostForm from './NewPostForm';
import AccountsUIWrapper from './AccountsUIWrapper';

const App = ({ posts, currentUser }) => {
  return (
    <div>
      <h1>Simple Blog</h1>
      <AccountsUIWrapper />

      {currentUser ? <NewPostForm /> : ''}

      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default withTracker(() => {
  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
