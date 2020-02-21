import React from 'react';
import ShortPost from './ShortPost';
import { usePosts } from '../custom-hooks/customHooks';

const PostList = () => {
  const { posts } = usePosts();

  return (
    <div>
      {posts.map(post => (
        <ShortPost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
