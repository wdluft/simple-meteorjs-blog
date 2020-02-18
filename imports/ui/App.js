import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts';

// Components
import Post from './Post';
import SinglePost from './SinglePost';
import PostListContainer from './PostListContainer';
import NewPostForm from './NewPostForm';
import AccountsUIWrapper from './AccountsUIWrapper';

const App = ({ posts, currentUser }) => {
  return (
    <Router>
      <div>
        <h1>Simple Blog</h1>
        <Link to='/posts'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/addpost'>Add Post</Link>

        <Switch>
          <Route path='/login'>
            <AccountsUIWrapper />
          </Route>
          <Route path='/addpost'>
            <NewPostForm />
          </Route>
          <Route path='/posts/:postId'>
            <SinglePost />
          </Route>
          <Route path='/posts'>
            <PostListContainer />
          </Route>
          <Route path='/'>
            <div>
              <h1>HOME</h1>
            </div>
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
