const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');

const sassConfig = {
  includePaths: ['node_modules/bootstrap-sass/assets/stylesheets'],
};

delete config.output.publicPath;
delete config.devServer;
delete config.devtool;

config.module.rules[1] = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', `sass-loader?${JSON.stringify(sassConfig)}`],
  }),
};
config.output.filename = '[name].[chunkhash].js';

config.plugins.push(new webpack.optimize.UglifyJsPlugin());
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
);
config.plugins.push(new ExtractTextPlugin('style.css'));
config.plugins.push(new CleanWebpackPlugin(['dist/']));
config.plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
);

module.exports = config;
