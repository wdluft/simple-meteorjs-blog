import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { withTracker } from 'meteor/react-meteor-data';
import styled from 'styled-components';

import { Posts } from '../api/posts';

// Components
import SinglePost from './single-post/SinglePost';
import PostListContainer from './post-list/PostListContainer';
import NewPostForm from './creating-post/NewPostForm';
import AccountsUIWrapper from './AccountsUIWrapper';
import Header from './header/Header';

const App = () => (
  <Router>
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/login">
          <AccountsUIWrapper />
        </Route>
        <Route path="/addpost">
          <NewPostForm />
        </Route>
        <Route path="/posts/:postId">
          <SinglePost />
        </Route>
        <Route path="/">
          <div>
            <PostListContainer />
          </div>
        </Route>
      </Switch>
    </StyledApp>
  </Router>
);

export default withTracker(() => {
  Meteor.subscribe('posts');

  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(App);

const StyledApp = styled.div`
  max-width: 705px;
  margin: 50px auto;
`;
