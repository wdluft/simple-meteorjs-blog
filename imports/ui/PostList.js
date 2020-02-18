import React from 'react';
import ShortPost from './ShortPost';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <ShortPost key={post._id} post={post} />
    ))}
  </div>
);

export default PostList;
