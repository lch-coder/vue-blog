const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    vendor:
      ['vue/dist/vue.esm.js',
        'vue-router',
        'vuex',
        'axios',
        'element-ui',
      ]
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: "[name]_library" //这个名称和下面的name值必须一样
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "../static/js/[name]-manifest.json"),
      name: "[name]_library" //这个名称和上面的library值必须一样
    }),
    // 压缩打包的文件，与该文章主线无关
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}