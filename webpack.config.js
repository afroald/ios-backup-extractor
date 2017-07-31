import path from 'path';
import webpack from 'webpack';

const publicPath = 'http://localhost:8080/static';

module.exports = {
  entry: path.resolve(__dirname, 'src/renderer'),
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, 'static'),
    publicPath,
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'static'),
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath,
  },
};
