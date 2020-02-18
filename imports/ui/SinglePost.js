import React from 'react';
import { useParams } from 'react-router-dom';

import Testing from './Post';

const SinglePost = () => {
  const postId = useParams();
  return <Testing postId={postId} />;
};

export default SinglePost;
