const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
      allShopifyArticle {
        edges {
          node {
            id
            url
            title
            contentHtml
            
          }
        }
      }
    }
    `).then(result => {
      result.data.allShopifyArticle.edges.forEach(({ node: article }) => {
        createPage({
          path: `/blog/${blog.url}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: { article }
        })
      })
      resolve()
    })
  })
}



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
      allShopifyProduct {
        edges {
          node {
            id
            handle
            title
            descriptionHtml
            variants {
            price
          }
          images {
            originalSrc
          }
          }
        }
      }
    }
    `).then(result => {
      result.data.allShopifyProduct.edges.forEach(({ node: product }) => {
        createPage({
          path: `/products/${product.handle}`,
          component: path.resolve(`./src/templates/product.js`),
          context: { product }
        })
      })
      resolve()
    })
  })
}