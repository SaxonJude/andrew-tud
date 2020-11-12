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
  ],
}
