module.exports = {
  plugins: [
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      // In your gatsby-transformer-remark plugin array
      plugins: [{
        resolve: 'gatsby-remark-emojis',
        options: {
          // Deactivate the plugin globally (default: true)
          active : true,
          // Add a custom css class
          class  : 'emoji-icon',
          // In order to avoid pattern mismatch you can specify
          // an escape character which will be prepended to the
          // actual pattern (e.g. `#:poop:`).
          escapeCharacter : '#', // (default: '')
          // Select the size (available size: 16, 24, 32, 64)
          size   : 64,
          // Add custom styles
          styles : {
            display      : 'inline',
            margin       : '0',
            'margin-top' : '1px',
            position     : 'relative',
            top          : '5px',
            width        : '25px'
          }
        }
      }]
    }
  },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
