import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';
import { withTracker } from 'meteor/react-meteor-data';
import PostList from './PostList';

const PostListContainer = withTracker(() => {
  return { posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch() };
})(PostList);

export default PostListContainer;
