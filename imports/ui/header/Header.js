import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => (
  <StyledHeader>
    <h1>Blog Title</h1>
    <p>
      By{' '}
      <a
        href="https://twitter.com/iamwilldl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Will Luft
      </a>
    </p>
    <Navbar />
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  p {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: 0.5rem;
  }
`;
