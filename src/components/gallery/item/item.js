import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { About, Title, Copy, Landing } from './item.css';
import { Link } from 'gatsby';

const Item = ({ title, copy, image }) => (
  <About>
  <Landing>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>

  </Landing>
  <Link to="/about">Learn More About Us </Link>
  </About>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
