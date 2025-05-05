const path = require("path");

const app_dir = __dirname + '/src';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: app_dir + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  mode: 'development',
  entry: app_dir + '/app.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // Обработка module.scss
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'sass-loader'
        ]
      },
      // Обработка обычных scss
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        loader: "file-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/node_modules/],
        loader: "file-loader"
      },
      {
        test: /\.(pdf)$/i,
        exclude: [/node_modules/],
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
        },
      },
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = config;
