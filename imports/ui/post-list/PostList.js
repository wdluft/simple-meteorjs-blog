import React from 'react';
import PropTypes from 'prop-types';
import ShortPost from './ShortPost';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <ShortPost key={post._id} post={post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
