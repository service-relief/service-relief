const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    authorName: `the Gatsby team`,
    authorLink:  `https://gatsbyjs.com/about`
  },
  plugins: [
    {
      resolve: `gatsby-theme-service-relief`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `..`, `examples`, `starter`),
        name: `starter-info`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`, "gatsby-remark-static-images"],
      },
    }
  ],
}
