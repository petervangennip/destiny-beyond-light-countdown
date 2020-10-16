const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "Soon Guardians..."
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/css/imports.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "-": path.resolve(__dirname, "packages")
      }
    }
  }
};
