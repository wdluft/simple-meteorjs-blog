import React from 'react';
import { usePosts } from '../custom-hooks/customHooks';
import AdminShortPost from './AdminShortPost';

const AdminPostList = () => {
  const { posts } = usePosts();

  return (
    <div>
      {posts.map(post => (
        <ul>
          <li>
            <AdminShortPost key={post._id} post={post} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AdminPostList;
