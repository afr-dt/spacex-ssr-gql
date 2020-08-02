const plugins = {
  'postcss-easy-import': {},
  tailwindcss: {},
};
// This branch definitly runs...
if (process.env.NODE_ENV === 'production') {
  plugins['@fullhuman/postcss-purgecss'] = {
    content: [
      './pages/**/*.js',
      './containers/**/*.js',
      './components/**/*.js',
    ],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  };

  plugins['cssnano'] = {
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  };
}

module.exports = {
  plugins,
};
