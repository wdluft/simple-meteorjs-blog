/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts';

export const useAccount = () =>
  useTracker(() => {
    const user = Meteor.user();
    const userId = Meteor.userId();
    return {
      user,
      userId,
      isLoggedIn: !!userId,
    };
  }, []);

export const usePost = postId => {
  const post = Posts.findOne({ _id: postId.postId });
  return {
    post,
  };
};

export const usePosts = () => {
  const posts = Posts.find({}, { sort: { createdAt: -1 } }).fetch();
  return {
    posts,
  };
};

// const withPost = withTracker(({ postId }) => {
//   const post = Posts.findOne({ _id: postId.postId });
//   return {
//     post,
//   };
// });
