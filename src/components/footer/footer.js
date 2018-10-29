import React from 'react';
import { Email, Container, Mailing } from './footer.css';
import Nav from 'components/footer/nav';



const Header = () => (
    <Container>
      <Nav />

      <Mailing>
      <h3>Mailing List</h3>
      <Email >
    <input placeholder="Email Address"></input>
    <button type="submit" className="search-button" >
      <span className="icon-fallback-text">Submit</span>
      </button>
    
    </Email>

    </Mailing>

    </Container>
);


export default Header;
