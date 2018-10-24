import React from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Company, Container } from './header.css';
import Nav from 'components/header/nav';
import Logo from './logo.svg';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = () => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
    <Company src={Logo} alt="Koa Logo" />
        
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);


export default Header;
