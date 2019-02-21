const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve(`./src/templates/blog-post.js`)
//   return graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       createPage({
//         path: post.node.fields.slug,
//         component: blogPost,
//         context: {
//           slug: post.node.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

exports.onCreateWebpackConfig = ({ actions, getConfig, rules, stage }) => {
  const { replaceWebpackConfig } = actions
  const config = getConfig()

  const linariaConfig = {
    loader: 'linaria/loader',
    options: {
      sourceMap: stage.includes('develop'),
    },
  }

  const tests = [rules.js().test.source, '\\.tsx?$']

  const sourceRules = config.module.rules.filter(({ test }) => {
    if (!test) return false
    return tests.includes(test.source)
  })

  sourceRules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.push(linariaConfig)
    } else if (rule.use) {
      // gatsby-plugin-typescript doesn't put it in an array
      rule.use = [rule.use, linariaConfig]
    }
  })

  replaceWebpackConfig(config)
}
