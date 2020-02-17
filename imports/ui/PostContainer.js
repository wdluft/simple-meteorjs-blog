import React from 'react';
import Meteor from 'meteor/meteor';
import { Posts } from '../api/posts';
import { withTracker } from 'meteor/react-meteor-data';
import Post from './Post';
import { useParams } from 'react-router-dom';

const PostContainer = withTracker(({ postId }) => {
  console.log('From PostContainer:');
  const id = postId.postId;
  console.log(id);
  const post = Posts.findOne(id);

  console.log(post);

  return { post };
})(Post);

export default PostContainer;
