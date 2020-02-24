import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { StyledPost } from '../reusable-components/StyledPost';

const PostList = ({ post }) => {
  const { title, description, _id, createdAt } = post;

  return (
    <StyledPostList>
      <h1>
        <Link to={`/${_id}`}>{title}</Link>
      </h1>
      <p className="date">{moment(createdAt).format('dddd, MMMM D YYYY')}</p>
      <p>{description}</p>
    </StyledPostList>
  );
};

PostList.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostList;

const StyledPostList = styled(StyledPost)`
  margin-bottom: 2rem;

  h1 {
    a {
      &:hover {
        text-decoration: none;
      }
    }
  }
`;
