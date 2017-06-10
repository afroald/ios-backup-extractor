const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static'),
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
    ],
  },
};
