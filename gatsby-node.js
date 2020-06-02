exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(
        `
        {
            allMerchJson {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
    )

    const merchTemplate = require.resolve("./src/templates/MerchPage.js");

    data.data.allMerchJson.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}/`,
            component: merchTemplate,
            context: {
                slug: edge.node.slug
            }
        })
    })
}