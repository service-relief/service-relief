require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = ({ authorName, authorLink }) => {
  return {
    siteMetadata: {
      title: `${process.env.CITY} Relief Resources`,
      description: `A list of resources that ${process.env.CITY} residents can both utilize and donate to during and beyond this COVID-19 situation.`,
      authorName: authorName || `@boborchard`,
      authorLink: authorLink || `https://boborchard.com`,
      remixAuthorName: authorName || `Henry Quinn`,
      remixAuthorLink: authorLink || `https://henryneeds.coffee`,
      state: process.env.STATE || `{STATE}`,
      city: process.env.CITY || `{CITY}`,
      formId: process.env.AIRTABLE_EMBED_ID
    },
    plugins: [
      `gatsby-plugin-postcss`,
      `gatsby-plugin-react-helmet`,
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
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: require.resolve(`./src/images/heart.png`)
        }
      },
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Bungee`
            }
          ]
        }
      },
      `gatsby-plugin-preact`
      // this seems to break our CSS
      // {
      //   resolve: `gatsby-plugin-purgecss`,
      //   options: {
      //     printRejected: process.env.gatsby_log_level === `verbose`,
      //     develop: process.env.NODE_ENV !== `production`,
      //     tailwind: true,
      //   },
      // },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ]
  };
};
