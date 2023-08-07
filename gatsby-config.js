module.exports = {
  siteMetadata: {
    title: `Portfolio Loïc Bouvier`,
    description: `Portfolio de Loïc Bouvier. Développeur de jeux vidéo avec 7 ans d'expérience sur Unity.`,
    author: `Loïc Bouvier`,
    siteUrl: `https://loicbouvier-gamedev.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectPages`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Loïc Bouvier`,
        short_name: `Portfolio`,
        description: `Portfolio de Loïc Bouvier, développeur Unity.`,
        lang: `fr`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:100,200,300,300i,500,700,900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 500,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 0,
            importFrom: ["./src/css/layout.css"],
          }),
        ],
      },
    },
  ],
}
