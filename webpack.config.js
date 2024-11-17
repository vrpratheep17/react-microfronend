// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/tech/",
    libraryTarget: "umd",
    library: "MicroApp",
    umdNamedDefine: true,
    clean: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      rewrites: [{ from: /^\/tech\//, to: "/tech/index.html" }],
    },
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/tech/",
    },
    devMiddleware: {
      publicPath: "/tech/",
    },
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      publicPath: "/tech/",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
