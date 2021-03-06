/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Daniel Otieno',
    description: 'Welcome || This is Daniel Otieno website portfolio',
    twitterUsername: '@danielotienoke',
    image: '/twitter-img.png',
    siteUrl: 'https://danielotieno.netlify.app',
  },
  plugins: [
    'gatsby-plugin-dark-mode',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
        singleTypes: [`about`],
        //If using single types place them in this array.
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`, `source sans pro\:300,400,400i,700`],
        display: 'swap',
      },
    },
  ],
};
