module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
//        target: 'http://121.40.133.115/',   //代理接口
        target: process.env.NODE_ENV === 'production' ? 'http://121.40.133.115/' : 'http://121.40.133.115/',  // 接口域名
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      }
    }
  }
}
