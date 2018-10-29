import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Gallery from 'components/gallery';
import Hero from 'components/hero';

const Index = ({ data }) => (
  <Layout>
    <Hero items={data.homeJson.gallery} />
    <Box>
  
      <h2>Direct To You, Affordable From Nature</h2>
      <h4>Shop our Essentials Kit</h4>
      
       <div className="index-items">
        {data.allShopifyProduct.edges.map(({ node }) => (
          <div  key={node.id}>
<Img fluid={node.images[0].localFile.childImageSharp.fluid}/>
           <Link to={`/products/${node.handle}`}><h3>
              {node.title}
            </h3></Link>


          </div>
        ))}
      </div>
     <Gallery items={data.aboutJson.gallery} />

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

    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      }

        homeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
     gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
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
