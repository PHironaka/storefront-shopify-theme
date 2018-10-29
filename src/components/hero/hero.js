import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/p1';
import { Hero } from './hero.css';

const Gallery = ({ items }) => (
  <Hero>{items.map((item, i) => <Item {...item} key={i} />)}</Hero>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
