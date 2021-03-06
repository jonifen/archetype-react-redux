var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/example.js"
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./public" }
      ]
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};