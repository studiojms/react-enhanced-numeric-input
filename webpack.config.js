/* eslint-disable */
const path = require("path");

module.exports = {
  entry: "./src/NumericInput.tsx",
  output: {
    filename: "NumericInput.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
