module.exports = {
  siteMetadata: {
    title: `unintendedcon`,
    description: `home site of unintendecon, Jonathan Wong.`,
    author: `@Jonw27`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-theme-gallery`,
      options: {
        basePath: "/photos/",
      }
    },
    `gatsby-plugin-offline`
  ]
};
