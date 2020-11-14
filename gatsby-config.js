module.exports = {
    siteMetadata: {
        title: 'Andy Tud',
        author: 'Saxon Du Plooy'
    },
  plugins: [
    // 'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `source sans pro\:200,300,400,500,600,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}