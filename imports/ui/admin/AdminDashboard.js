import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';

import AdminPostList from './AdminPostList';
import { useAccount } from '../custom-hooks/customHooks';
import LoginForm from './LoginForm';

const AdminDashboard = () => {
  const { isLoggedIn } = useAccount();

  const logoutFunction = () => {
    Meteor.logout();
    return <Redirect to="/" />;
  };

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <div>
      <p>Logout</p>
      <button type="button" onClick={logoutFunction}>
        Logout
      </button>
      <p>Post List</p>
      <AdminPostList />
    </div>
  );
};

export default AdminDashboard;
