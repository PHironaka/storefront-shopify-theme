import React from "react"
import Layout from "components/layout"
import PropTypes from 'prop-types';


const Product = ({ pageContext: { product } }) => (
  <Layout>
      <div>
        <h1>{product.title}</h1>
        <img src={product.images[0].originalSrc} alt={product.title} />

      </div>
    </Layout>
);

Product.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Product;