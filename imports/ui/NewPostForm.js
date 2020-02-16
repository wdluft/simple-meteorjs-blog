import React, { useState } from 'react';
import { Posts } from '../api/posts';

const NewPostForm = () => {
  const [title, setTitle] = useState('Post Title');
  const [body, setBody] = useState('Post Body');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);

    Posts.insert({
      title,
      body,
      createdAt: new Date(), //current time
    });

    setTitle('Title');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
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
