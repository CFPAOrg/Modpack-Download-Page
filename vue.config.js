module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'CFPAOrg整合包汉化下载';
      return args;
    });
  },
  css: {
    loaderOptions: {
      css: {
        url: false
      },
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  }
};
