import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
      <li>
        <Link to="/admin/addpost">Add Post</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Navbar;

const StyledNav = styled.nav`
  font-size: 1.5rem;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
