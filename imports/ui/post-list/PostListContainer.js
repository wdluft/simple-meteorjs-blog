// eslint-disable-next-line import/no-unresolved
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts';
import PostList from './PostList';

const PostListContainer = withTracker(() => ({
  posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
}))(PostList);

export default PostListContainer;
