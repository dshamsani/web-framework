import path from "path";

export default {
  entry: "./src/index.ts",

  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  mode: "development",
};
