const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss'); // css clean up
const autoprefixer = require('autoprefixer'); // cross-browser compatibility
const cssnano = require('cssnano'); // css minification

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 2 versions', '> 1%']
    }),
    purgeCSSPlugin({
      content: ['./**/*.html']
    }),
    cssnano({ preset: 'default' }) // Minify CSS
  ]
};