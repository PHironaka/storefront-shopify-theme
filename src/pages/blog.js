import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import { graphql } from 'gatsby';

const Blog = ({ data }) => (
  <Layout>
    <Box>
<div className="index-items">
        {data.allShopifyArticle.edges.map(({ node }) => (
          <div key={node.id}>

<img src={node.image.src} alt={node.id} />
           < h2> {node.title} </h2>
           < p> {node.excerpt} </p>


          </div>
        ))}
        </div>
    </Box>

  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
   query {

  allShopifyArticle (limit:6) {
    edges {
      node {
        id
        image {
          src
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
               }
             }
          }
        }
        author {
          email
          name
        }
        title
        content
        excerpt
        contentHtml
        publishedAt(formatString: "ddd, MMMM Do, YYYY")
      }
    }
  }
}

`;