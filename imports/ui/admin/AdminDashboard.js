import React from 'react';
import { Link } from 'react-router-dom';

import AccountsUIWrapper from './AccountsUIWrapper';
import AdminPostList from './AdminPostList';

const AdminDashboard = () => (
  <div>
    <p>Login / Logout</p>
    <AccountsUIWrapper />
    <p>
      <Link to="/admin/addpost">Add New Post</Link>
    </p>
    <p>Post List</p>
    <AdminPostList />
  </div>
);

export default AdminDashboard;
