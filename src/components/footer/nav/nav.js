import React from 'react';
import { Link } from 'gatsby';
import { Container, Left } from './nav.css';

const Nav = () => (
  <Left>
  <Container>
    <ul>
      <h3> About </h3>

      <li>
        <Link to="/products">Ingredients</Link>
      </li>

       <li>
        <Link to="/about">Products</Link>
      </li>

      <li>
        <Link to="/blog">Roots</Link>
      </li>


    </ul>

      <ul>
      <h3> Info </h3>
      <li>
        <Link to="/products">Contact</Link>
      </li>

       <li>
        <Link to="/about">Shipping</Link>
      </li>

      <li>
        <Link to="/blog">Return Policy</Link>
      </li>


    </ul>

      <ul>
      <h3> Social </h3>

      <li>
        <Link to="/products">Instagram</Link>
      </li>

       <li>
        <Link to="/about">Facebook</Link>
      </li>

      <li>
        <Link to="/blog">Twitter</Link>
      </li>


    </ul>

  </Container>
    <small>© KOA , ALL  RIGHTS  RESERVED . 2018</small>
  
  </Left>
);

export default Nav;
