import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostList = ({ post }) => {
  const { title, body, _id, createdAt } = post;

  const dateAsString = createdAt.toString();

  const bodyPreview = () => {
    const shortBody = body.split('');
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

PostList.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostList;
