module.exports = {
  siteMetadata: {
    title: `unintendedcon`,
    description: `CS, startups, and productivity. Follow the in-progress life story of 20 year old me.`,
    author: `Jonathan Wong`,
    siteUrl: `https://unintendedcon.github.io`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `unintendedcon`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/logo/favicon-32x32.png`
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
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: `language-`,
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: false,
        noInlineHighlight: false
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-theme-gallery`,
      options: {
        basePath: `/photos/`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ]
};
