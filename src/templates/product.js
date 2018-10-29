import React from "react"
import Layout from "components/layout"
import Box from 'components/box';
import PropTypes from 'prop-types';


const Product = ({ pageContext: { product } }) => (
  <Layout>
  <Box>
      <div>
        <h1>{product.title}</h1>
   <img src={product.images[0].originalSrc} alt={product.title} />
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </div>
      </Box>
    </Layout>
);

Product.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Product;