const path = require('path')
const pkg = require(`./package.json`);


module.exports = {
  siteMetadata: {
    title: `Jamal Dahbur's Portfolio`,
    description: `Jamal Dahbur's Portfolio`,
    author: `@dahburj`,
    siteURL: `https://jdahbur.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        root: path.join(__dirname, '.')
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#f7f0eb`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: [`300`, `400`, `500`],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/assets`
          }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            plugins: [`gatsby-remark-responsive-iframe`],
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: ["oembed", "video"],
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: ["Reddit"]
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `r2n8q1jk3a3h`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'VSLNvEuJd_PD7yXIBQ8jVIVasE_YmsCCWPOvSfYd1sE',
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      // This is only needed temporarily. Themes will automatically be transpiled in later versions.
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [pkg.name],
      },
    },
  ],
}
