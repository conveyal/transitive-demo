
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
      disable: false
    })
  ],
  module: {
    rules: [
      {   test: /\.js$/,
        use: [
          {
            loader: 'babel?optional=runtime'
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
    ]
  }
};
