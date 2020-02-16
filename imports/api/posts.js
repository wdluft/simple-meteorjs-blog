import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Posts = new Mongo.Collection('posts');

// Publish all posts
if (Meteor.isServer) {
  Meteor.publish('posts', function tasksPublication() {
    return Posts.find();
  });
}

Meteor.methods({
  'posts.insert'(title, body) {
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
  'posts.remove'(postId) {
    check(postId, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Posts.remove(postId);
  },
});
