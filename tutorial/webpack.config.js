const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
module.exports = {
  mode: mode,
  /* entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  }, */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          //without additional settings this will reference .babelrc
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: "./public",
  },
};
