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
    },
    // {
    //   resolve: 'gatsby-source-apiserver',
    //   options: {
    //     // typePrefix: '',
    //     url: `http://pokeapi.co/api/v2/pokemon/?limit=151`,
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     data: {
    //
    //     },
    //     name: `pokenode`,
    //     entityLevel: `data.results.pokenode`,
    //     schemaType: {
    //       name: 'String',
    //       url: 'String',
    //     },
    //     auth: {
    //       username: null,
    //       password: null
    //     },
    //     payloadKey: `body`,
    //     localSave: true,
    //     path: `${__dirname}/src/queries/`,
    //     // verboseOutput: false, // For debugging purposes
    //     // skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want
    //   }
    // }
  ],
};
