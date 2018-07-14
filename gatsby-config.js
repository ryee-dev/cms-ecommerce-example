module.exports = {
  siteMetadata: {
    title: 'Dato-Snip-Store',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: 'c01bcc752a43e4e086d3219a4d37a9' },
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: 'Yjc3NGUxYmItMWE3NS00NmYzLWJmMjMtOGNlNzQ5ZGU2N2IzNjM2NjY5Mjc5Nzk3NTAwODA5',
        autopop: true,
      }
    },
    {
      resolve: "gatsby-source-pixabay",
      options: {
        key: "9548082-f996eef7ac46a57db5182d289",
        q: "yellow flowers",
      },
    },
    {
      resolve: "gatsby-source-yelp",
      options: {
        key: "_oJ3cRSNAco7JJ6A_tfypbdG-lZl_SaRiS_vs8X0S8Qx1nUW2jS_p4HKmrZTZo9vhIqLFfkHkIPYd9ZAI2Of8qFxeTAeTRxuST6_yxvUSRBuPVUxceQPZZfxApdJW3Yx",
        q: "yellow flowers",
      },
    },
  ],
};
