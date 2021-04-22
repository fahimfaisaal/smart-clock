const path = require('path');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode,
  target,
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      }, {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.(png|jpe?g|gif|svg|mp4)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new EslintWebpackPlugin({
      formatter: 'codeframe',
      emitError: false,
      emitWarning: false,
    }),
  ],
  devtool: false,
};
