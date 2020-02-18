// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { Mongo } from 'meteor/mongo';
// eslint-disable-next-line import/no-unresolved
import { check } from 'meteor/check';

export const Posts = new Mongo.Collection('posts');

// Publish all posts
if (Meteor.isServer) {
  Meteor.publish('posts', function tasksPublication() {
    return Posts.find();
  });
}

Meteor.methods({
  'posts.insert': function(title, body) {
    check(title, String);
    check(body, String);

    // Make sure the user is logged in before adding a post
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Posts.insert({
      title,
      body,
      createdAt: new Date(),
    });
  },
  'posts.remove': function(postId) {
    check(postId, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Posts.remove(postId);
  },
});
