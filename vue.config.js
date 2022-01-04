const path          = require("path");
const fs            = require("fs");
const resolve       = path.resolve;
const childProcess  = require("child_process");

module.exports = {
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: "@import \"~@/assets/styles/_variables.scss\";"
      },
      scss: {
        prependData: "@import \"~@/assets/styles/_variables.scss\";"
      }
    }
  },
  // outputDir: process.env.VUE_APP_OUTPUT_DIR,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: config => {
    return {
      optimization: {
        minimize: true
      },
      resolve: {
        alias: {
          "~": resolve(__dirname, "src/"),
          "@": resolve(__dirname, "src/"),
        },
      },
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({symbolId: "icon-[name]"})
      .end()

    return {
      optimization:{
        minimize: true
      },
      resolve: {
        alias: {
          "~": resolve(__dirname, "src/"),
          "@": resolve(__dirname, "src/"),
        },
      },
      plugins: [
      ]
    };

  }
}
