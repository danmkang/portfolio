module.exports = {
  siteMetadata: {
    title: `Daniel Kang`,
    description: `Daniel Kang's Personal Webiste`,
    siteUrl: `https://daniekang.co`,
    url: `https://daniekang.co`, 
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}