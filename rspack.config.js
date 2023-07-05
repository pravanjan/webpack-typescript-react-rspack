const { resolve } = require("path");

module.exports = {
  mode: process.env.REACT_APP_MODE ? "development" : "production",
  devtool: "source-map",
  entry: "./index.tsx",
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
  },
  context: resolve(__dirname, "./src"),

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/i,
        type: "css", // this is enabled by default for .css, so you don't need to specify it
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  builtins: {
    presetEnv: {
      targets: ["Chrome>=48"],
    },
    html: [{ template: "index.html" }],
  },
  target: ["web", "es5"],
};
