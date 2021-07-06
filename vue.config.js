const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // publicPath: '/workspace8.1',
  // outputDir: 'dist',
  // assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  // parallel: require('os').cpus().length > 1,
  // productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 3333,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {},
  },
  configureWebpack: {
    name: "liuwb",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [],
  },
};
