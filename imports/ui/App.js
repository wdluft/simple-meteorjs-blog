import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts';

// Components
import Post from './Post';
import NewPostForm from './NewPostForm';

const App = ({ posts }) => {
  return (
    <div>
      <h1>Simple Blog</h1>
      <NewPostForm />

      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default withTracker(() => {
  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);
