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
      resolve: `gatsby-source-faker`,
      options: {
        schema: {
          name: [`firstName`, `lastName`],
          address: [`streetAddress`, `streetName`, `city`, `state`, `zipCode`],
          internet: [`email`],
          lorem: [`paragraph`],
          phone: [`phoneNumber`],
        },
        count: 1,
        type: `PersonalData`,
      },
    },
    {
      resolve: `gatsby-source-faker`,
      options: {
        schema: {
          company: [`companyName`, `companySuffix`],
        },
        count: 3,
        type: `CompanyData`,
      },
    },
  ],
};
