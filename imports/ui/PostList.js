import React from 'react';
import Post from './Post';
import ShortPost from './ShortPost';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <ShortPost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
