import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login User</button>
      </form>
    </div>
  );
};

export default LoginForm;
