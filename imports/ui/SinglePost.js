import React from 'react';
import { useParams } from 'react-router-dom';

import PostContainer from './PostContainer';

const SinglePost = () => {
  const postId = useParams();
  return <PostContainer postId={postId} />;
};

export default SinglePost;
