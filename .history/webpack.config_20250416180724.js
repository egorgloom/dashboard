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
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // }
      { test: /\.tsx?$/, loader: "ts-loader" }, 

      { test: /\.scss$/, use: [ 
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },  // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
      ] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    // open: true,
    hot: true,
    historyApiFallback: true,
  },
};
module.exports = config;
