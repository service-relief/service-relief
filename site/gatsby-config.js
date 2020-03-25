const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Service Relief`,
    description: `This is a directory of the Service Relief projects from around the world. Each directory promotes local fundraisers and resources to support bars, restaurants, service businesses and more affected by the COVID-19 health crisis around the world.`,
    author: `@boborchard`,
    authorName: `the Gatsby team`,
    authorLink: `https://gatsbyjs.com/about`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-theme-service-relief`,
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
    },
  ],
}
