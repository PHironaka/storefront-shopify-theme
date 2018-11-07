import React from "react"
import Layout from "components/layout"
import Box from 'components/box';
import PropTypes from 'prop-types';


const Blog = ({ pageContext: { article } }) => (
  <Layout>
  <Box>
      <div>
        <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </div>
      </Box>
    </Layout>
);

Blog.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Blog;