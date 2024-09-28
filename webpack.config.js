import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  entry: "./src/index.ts",

  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(process.cwd(), "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },

  mode: "development",
};
