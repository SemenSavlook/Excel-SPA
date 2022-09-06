const path = require('path');
const webpack = require('webpack'); // webpack.DefinePlugin - определяет перемнные окружения во время компиляции
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Чистит указанную папку
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Работает c html типмлейтом, подключает js файлы
const CopyPlugin = require('copy-webpack-plugin'); // Копирует статические элементы
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //  Выносит css из js в отдельный css

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const fileName = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      },
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },

  devtool: isDev ? 'source-map' : false,

  devServer: {
    port: 3000,
    hot: isDev,
    client: {
      overlay: false,
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),

    new CopyPlugin(
        {
          patterns: [
            {
              from: path.resolve(__dirname, 'src/favicon.ico'),
              to: path.resolve(__dirname, 'dist'),
            },
          ],
        }
    ),

    new MiniCssExtractPlugin({
      filename: fileName('css'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  module: {
    rules: [

      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },

    ],
  },

};
