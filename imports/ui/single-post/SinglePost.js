import React from 'react';
// eslint-disable-next-line import/no-unresolved
import marked from 'marked';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { usePost } from '../custom-hooks/customHooks';
import { StyledPost } from '../reusable-components/StyledPost';

const renderer = new marked.Renderer();
marked.setOptions({
  breaks: true,
  gfm: true,
});

const OnlyOne = () => {
  const { postId } = useParams();
  const { post } = usePost(postId);

  if (post === undefined) {
    return (
      <div>
        <h1>LOADING</h1>
      </div>
    );
  }

  const { title, body, createdAt } = post;
  return (
    <StyledSinglePost>
      <h1>{title}</h1>
      <p className="date">{moment(createdAt).format('dddd, MMMM D YYYY')}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(body, { renderer }),
        }}
      />
    </StyledSinglePost>
  );
};

export default OnlyOne;

const StyledSinglePost = styled(StyledPost)`
  .date {
    margin-bottom: 1.5rem;
  }
`;
