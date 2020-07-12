const path = require("path");
const { WebPlugin } = require("web-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: "./src/main.js",
  output: {
    publicPath: "",
    filename: "[name].js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    mainFields: ["jsnext:main", "browser", "main"]
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        }),
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        loader: "base64-inline-loader"
      }
    ]
  },
  plugins: [
    new WebPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ],
};
