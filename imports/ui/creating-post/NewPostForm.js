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
        required
      />
      <p>Description: </p>
      <textarea
        name="description"
        id=""
        multiline="true"
        cols="30"
        rows="10"
        required
        onChange={e => {
          setDescription(e.target.value);
        }}
      />
      <p>Body:</p>
      <textarea
        name="body"
        id=""
        requred
        cols="30"
        rows="10"
        value={body}
        onChange={e => {
          console.log(e.target.value);
          setBody(e.target.value);
        }}
      />
      <p>{body}</p>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewPostForm;
