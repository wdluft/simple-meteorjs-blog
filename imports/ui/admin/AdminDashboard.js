import React from 'react';
import { Link } from 'react-router-dom';

import AccountsUIWrapper from './AccountsUIWrapper';
import AdminPostList from './AdminPostList';
import { useAccount } from '../custom-hooks/customHooks';

const AdminDashboard = () => {
  const { isLoggedIn } = useAccount();

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Login:</h1>
        <AccountsUIWrapper />
      </div>
    );
  }

  return (
    <div>
      <p>Logout</p>
      <AccountsUIWrapper />
      <p>
        <Link to="/admin/addpost">Add New Post</Link>
      </p>
      <p>Post List</p>
      <AdminPostList />
    </div>
  );
};

export default AdminDashboard;
