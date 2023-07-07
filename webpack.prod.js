const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const packageJson = require("./package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
 });