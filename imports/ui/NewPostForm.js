import React, { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        name="body"
        id=""
        cols="30"
        rows="10"
        onChange={e => setBody(e.target.value)}
      />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
