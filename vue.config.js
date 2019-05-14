module.exports = {
  devServer: {
    proxy: {
      '/server': {
        target: 'http://192.168.1.102:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/server': ''
        }
      }
    }
  }
}
