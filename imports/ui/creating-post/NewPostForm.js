import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';

const NewPostForm = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');

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
        id=""
        multiline="true"
        cols="30"
        rows="10"
        required="required"
        onChange={e => {
          setDescription(e.target.value);
        }}
      />
      <p>Body:</p>
      <textarea
        name="body"
        id=""
        requred="required"
        cols="30"
        rows="10"
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
