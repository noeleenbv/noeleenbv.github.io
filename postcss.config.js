const autoprefixer = require('autoprefixer'); // Cross-browser compatibility
const cssnano = require('cssnano'); // CSS minification

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 2 versions', '> 1%']
    }),
    cssnano({ preset: 'default' }) // Minify CSS
  ]
};