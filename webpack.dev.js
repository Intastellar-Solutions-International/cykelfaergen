const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dev'),
    clean: true,
    publicPath: "/"
  },
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: './dev',
    historyApiFallback: true,
  },
});