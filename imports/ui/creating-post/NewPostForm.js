import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';
import { useHistory, Redirect } from 'react-router-dom';
import { useAccount } from '../custom-hooks/customHooks';

const NewPostForm = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const { isLoggedIn, user } = useAccount();

  const handleSubmit = e => {
    e.preventDefault();

    if (body === '' || title === '' || description === '') {
      alert('All fields are required');
      return;
    }

    Meteor.call('posts.insert', title, body, description);

    setTitle('');
    setBody('');
    history.push('/posts');
  };

  if (!isLoggedIn) {
    return <Redirect to="/admin/login" />;
  }

  return (
    <form>
      <p>Title:</p>
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required="required"
      />
      <p>Description: </p>
      <textarea
        name="description"
        id="description"
        multiline="true"
        cols="100"
        rows="5"
        required="required"
        onChange={e => {
          setDescription(e.target.value);
        }}
      />
      <p>Body:</p>
      <textarea
        name="body"
        id="body"
        requred="required"
        cols="100"
        rows="20"
        value={body}
        onChange={e => {
          setBody(e.target.value);
        }}
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewPostForm;
