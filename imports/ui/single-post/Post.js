import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { withTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import marked from 'marked';
import { Posts } from '../../api/posts';
import { StyledPost } from '../reusable-components/StyledPost';

const withPost = withTracker(({ postId }) => {
  const post = Posts.findOne({ _id: postId.postId });
  return {
    post,
  };
});

const withUser = withTracker(() => {
  const user = Meteor.user();
  return {
    user,
  };
});

const renderer = new marked.Renderer();
marked.setOptions({
  breaks: true,
});

// ACTUAL COMPONENT
const Post = ({ post, user }) => {
  const history = useHistory();

  if (post === undefined) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }

  const { title, body, _id, createdAt } = post;
  const deletePost = () => {
    Meteor.call('posts.remove', _id);
    history.push('/posts');
  };
  return (
    <StyledSinglePost>
      <h1>{title}</h1>
      <p className="date">{moment(createdAt).format('dddd, MMMM D YYYY')}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(body, { renderer }),
        }}
      />

      {user ? (
        <button type="button" onClick={deletePost}>
          Remove Post
        </button>
      ) : (
        ''
      )}
    </StyledSinglePost>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const Testing = withUser(withPost(Post));

export default Testing;

const StyledSinglePost = styled(StyledPost)`
  .date {
    margin-bottom: 1.5rem;
  }
`;
