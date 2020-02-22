import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
// eslint-disable-next-line import/no-unresolved
import { Meteor } from 'meteor/meteor';
import { StyledPost } from '../reusable-components/StyledPost';
import { useAccount } from '../custom-hooks/customHooks';

const PostList = ({ post }) => {
  const { title, _id, createdAt } = post;
  const { isLoggedIn } = useAccount();

  const deletePost = () => {
    Meteor.call('posts.remove', _id);
  };

  return (
    <StyledPostList>
      <p>
        <Link to={`/posts/${_id}`}>{title}</Link>
      </p>
      <p className="date">{moment(createdAt).format('dddd, MMMM D YYYY')}</p>
      {isLoggedIn ? (
        <button type="button" onClick={deletePost}>
          Remove Post
        </button>
      ) : (
        ''
      )}
    </StyledPostList>
  );
};

PostList.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostList;

const StyledPostList = styled(StyledPost)`
  margin-bottom: 2rem;
`;
