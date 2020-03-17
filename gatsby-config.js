module.exports = {
  siteMetadata: {
    title: `Epic Seven Stat Comparison Tool`,
    description: `A tool for comparing hero stats.`,
    author: `@jacklansing`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
  ],
};
