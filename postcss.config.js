const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer'); // Add Autoprefixer


module.exports = {
  plugins: [
    autoprefixer({ // Add Autoprefixer configuration
        overrideBrowserslist: ['last 2 versions', '> 1%'] // Specify browser support
      }),
    purgeCSSPlugin({
      content: ['./**/*.html']
    })
  ]
};