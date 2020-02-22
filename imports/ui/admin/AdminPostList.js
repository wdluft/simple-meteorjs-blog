import React from 'react';
import { usePosts } from '../custom-hooks/customHooks';
import AdminShortPost from './AdminShortPost';

const AdminPostList = () => {
  const { posts } = usePosts();

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li>
            <AdminShortPost key={`admin-${post._id}`} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPostList;
