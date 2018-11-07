import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/about-p2';
import { Hero } from './about-balance.css';

const Gallery = ({ items }) => (
  <Hero>{items.map((item, i) => <Item {...item} key={i} />)}</Hero>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
