const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
module.exports = {
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
  },
  chainWebpack: config => {
    /*config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true,
      });*/
  },
};
