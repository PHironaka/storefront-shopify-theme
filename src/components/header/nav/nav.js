import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/products">Products</Link>
      </li>

       <li>
        <Link to="/about">Challenge</Link>
      </li>

      <li>
        <Link to="/blog">Journal</Link>
      </li>

      <li>
        <Link to="/blog">Cart</Link>
      </li>


    </ul>
  </Container>
);

export default Nav;
