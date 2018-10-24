import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
      <h2>Direct To You, Affordable From Nature</h2>
      
       <div className="index-items">
        {data.allShopifyProduct.edges.map(({ node }) => (
          <div  key={node.id}>
<Img fluid={node.images[0].localFile.childImageSharp.fluid}/>
            <h3>
              {node.title}
            </h3>


          </div>
        ))}
      </div>

      <div className="ig-intro"> 
      <p> Follow Along </p>
      <p className="username"> @koa </p>
      </div>
       <div className="index-items--ig">

        {data.allInstaNode.edges.map(({ node }) => (
          <div  key={node.id}>
<Img fluid={node.localFile.childImageSharp.fluid}/>
         

          </div>
        ))}
      </div>


    </Box>

    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
   query {
    allShopifyProduct (limit: 3) {
    edges {
      node {
        id
        title
        handle
        descriptionHtml
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

  
  allInstaNode (limit: 5){
    edges {
      node {
        id
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
`;
