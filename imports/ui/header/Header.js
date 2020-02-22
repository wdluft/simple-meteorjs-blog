import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

import { useAccount } from '../custom-hooks/customHooks';

const Header = () => {
  const { isLoggedIn } = useAccount();

  return (
    <StyledHeader>
      <h1>
        <Link to="/">Blog Title</Link>
      </h1>
      <p>
        A collection of thoughts by{' '}
        <a
          href="https://twitter.com/iamwilldl"
          rel="noopener noreferrer"
          target="_blank"
        >
          Will Luft
        </a>
      </p>
      {isLoggedIn ? <Navbar /> : ''}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin-bottom: 2rem;

  p {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: 0.5rem;

    background: -webkit-linear-gradient(90deg, #00ffff -0.05%, #ff0095 99.95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
