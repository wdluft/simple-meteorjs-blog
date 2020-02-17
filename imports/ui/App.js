import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts';

// Components
import Post from './Post';
import NewPostForm from './NewPostForm';
import AccountsUIWrapper from './AccountsUIWrapper';

const App = ({ posts, currentUser }) => {
  return (
    <Router>
      <div>
        <h1>Simple Blog</h1>
        <Link to='/'>Home</Link>
        <AccountsUIWrapper />

        <Switch>
          <Route path='/addpost'>
            <NewPostForm />
          </Route>
          <Route path='/'>
            {posts.map(post => (
              <Post key={post._id} post={post} currentUser={currentUser} />
            ))}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default withTracker(() => {
  Meteor.subscribe('posts');

  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
