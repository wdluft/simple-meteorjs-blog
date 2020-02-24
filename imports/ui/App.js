import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { withTracker } from 'meteor/react-meteor-data';
import styled from 'styled-components';

import { Posts } from '../api/posts';

// Components
import NewPostForm from './creating-post/NewPostForm';
import Header from './header/Header';
import AdminDashboard from './admin/AdminDashboard';
import PostList from './post-list/PostList';
import SinglePost from './single-post/SinglePost';
import LoginForm from './admin/LoginForm';
import Footer from './footer/Footer';

const App = () => (
  <Router>
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/admin/login">
          <LoginForm />
        </Route>
        <Route path="/admin/addpost">
          <NewPostForm />
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/:postId">
          <SinglePost />
        </Route>
        <Route path="/">
          <PostList />
        </Route>
      </Switch>
      <Footer />
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
