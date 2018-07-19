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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'queries',
        path: `${__dirname}/src/queries`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // IF API KEY IS NEEDED
        // headers: {
        //   authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        // }
        url: 'https://icanhazdadjoke.com/graphql'
      }
    }
  ],
};
