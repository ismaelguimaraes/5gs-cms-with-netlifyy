const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/BlogPage.js');

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`).then(res => { 
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })


}

// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//     const data = await graphql(
//         `
//         {
//             allMerchJson {
//               edges {
//                 node {
//                   slug
//                 }
//               }
//             }
//           }
//         `
//     )

//     const merchTemplate = require.resolve("./src/templates/MerchPage.js");

//     data.data.allMerchJson.edges.forEach(edge => {
//         createPage({
//             path: `/blog/${edge.node.slug}/`,
//             component: merchTemplate,
//             context: {
//                 slug: edge.node.slug
//             }
//         })
//     })
// }