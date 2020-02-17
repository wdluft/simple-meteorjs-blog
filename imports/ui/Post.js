import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../api/posts';

const Post = ({ post }) => {
  const { title, body, _id, createdAt } = post;
  console.log('From post route:');
  console.log(post);

  return (
    <div>
      <p>Single Post Route</p>
    </div>
  );
};

// const Post = ({ post}) => {
//   const { title, body, _id, createdAt } = post;

//   const { postId } = useParams();

//   const dateAsString = createdAt.toString();

//   const deletePost = () => {
//     Meteor.call('posts.remove', _id);
//   };
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{dateAsString}</p>
//       <p>{body}</p>

//       {currentUser ? (
//         <button type='button' onClick={deletePost}>
//           Remove Post
//         </button>
//       ) : (
//         ''
//       )}
//     </div>
//   );
// };

export default Post;
