import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const Products = ({ data }) => (
  <Layout>
    <Box>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <div className="products"  key={node.id}>
			<Img fluid={node.images[0].localFile.childImageSharp.fluid}/>
          <div key={node.id}>
            <h3>
              {node.title}
            </h3>

           <p> {node.description} </p>
 </div>
 </div>
        ))}
     
    </Box>
  </Layout>
);

Products.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Products;

export const query = graphql`
   query {
    allShopifyProduct (limit: 3) {
    edges {
      node {
        id
        title
        handle
        description
        productType
        vendor
        variants {
          price
        }
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
               }
             }
          }
        }
        
      }
    }
  }
}
`;
