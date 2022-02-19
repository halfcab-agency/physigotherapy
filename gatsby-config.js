module.exports = {
  siteMetadata: {
      title: `Site title here`,
    siteUrl: `https://www.physigotherapy.com.au/`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Montserrat`,
      ],
      display: 'swap'
    }
  }]
};