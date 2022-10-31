const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    polyfill: "babel-polyfill",
    index: "./JS/index.js",
    product: "./JS/product.js",
    cart: "./JS/cart.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
