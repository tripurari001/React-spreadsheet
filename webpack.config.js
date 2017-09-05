const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sassConfig = {
  includePaths: ['node_modules/bootstrap-sass/assets/stylesheets'],
};

module.exports = {
  devtool: 'cheap-eval-source-map',

  entry: {
    main: ['./src/index.js'],
    vendor: ['react', 'react-dom', 'redux', 'react-redux'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', `sass-loader?${JSON.stringify(sassConfig)}`],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],

  // dev server configration
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
}; // end main object
