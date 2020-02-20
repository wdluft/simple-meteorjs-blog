import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostList = ({ post }) => {
  const { title, description, _id, createdAt } = post;

  const dateAsString = createdAt.toString();

  return (
    <div>
      <h1>{title}</h1>
      <p>{dateAsString}</p>
      <p>
        {description}
        <Link to={`/posts/${_id}`}>Read Post</Link>
      </p>
    </div>
  );
};

PostList.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostList;
