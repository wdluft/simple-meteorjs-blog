import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Post from './Post';

const PostList = ({ post }) => {
  const { title, body, _id, createdAt } = post;

  let match = useRouteMatch();

  const dateAsString = createdAt.toString();

  const bodyPreview = () => {
    let shortBody = body.split('');
    return shortBody.splice(0, 50).join('');
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{dateAsString}</p>
      <p>
        {bodyPreview()}...
        <Link to={`/posts/${_id}`}>Read Post</Link>
      </p>
    </div>
  );
};

export default PostList;
