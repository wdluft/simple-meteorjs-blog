import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    Meteor.call('posts.insert', title, body);

    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Post Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        name='body'
        onChange={e => setBody(e.target.value)}
      ></textarea>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default NewPostForm;
