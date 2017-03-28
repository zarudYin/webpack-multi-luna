const webpack = require('webpack');
const path = require('path');

const PATH_SRC = path.join(__dirname, 'src');

module.exports = {
  context: PATH_SRC,
  entry: {
    //todo
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        options: {
          name: '[path]/[hash:8].[ext]'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path]/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path]/[name].[hash:8].[ext]'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.less', '.css'],
    modules: [
      PATH_SRC,
      'node_modules',
    ],
    mainFiles: ['index', 'main'],
    alias: {  //指定路径的别名
      Utils: path.resolve(__dirname, 'src/utils'),
      Public: path.resolve(__dirname, 'public'),
      Assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  plugins: [

  ]
};