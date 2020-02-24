import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <StyledSocials>
    <p>
      <a
        href="https://twitter.com/iamwilldl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>{' '}
      |{' '}
      <a
        href="https://github.com/wdluft"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>{' '}
      |{' '}
      <a
        href="https://www.willluft.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio
      </a>
    </p>
  </StyledSocials>
);

export default Footer;

const StyledSocials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  margin: 50px 0;
`;
