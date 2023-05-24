const { resolve } = require("path");
const { HtmlRspackPlugin } = require("@rspack/plugin-html");

module.exports = {
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
    html: [{ template: "index.html.ejs" }],
  },
  target: ["web", "es5"],
  Plugin: [new HtmlRspackPlugin({ template: "index.html.ejs" })],
};
