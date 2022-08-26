module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `This is the portfolio of Loïc Bouvier, a Unity Game Developer with 5 years of experience on create in games.`,
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
          `Raleway\:300, 400, 700, 900`,
          `Roboto\:100,300,300i,400,500, 500i,700,900`,
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
