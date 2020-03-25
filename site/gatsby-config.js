const path = require('path')

module.exports = {
  siteMetadata: {
    title: `${process.env.CITY} Service Relief`,
    description: `A list of local relief resource directories to help cities and regions get through the local shutdowns.`,
    author: `@gatsbyjs`,
    authorName: `the Gatsby team`,
    authorLink: `https://gatsbyjs.com/about`,
    authorName: `@gatsbyjs`,
    authorLink: `https://gatsbyjs.com/about`,
    state: process.env.STATE || `{STATE}`,
    city: process.env.CITY || `{CITY}`,
    formId: process.env.AIRTABLE_EMBED_ID,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bungee`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
