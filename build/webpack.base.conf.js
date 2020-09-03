'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HappyPack = require('happypack');
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/*
  对于以.js或.vue后缀结尾的文件(在src目录下或test目录下的文件)，使用eslint进行文件语法检测。
*/

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,// 导出目录的绝对路径 在项目的根目录下 会新建dist文件夹
    filename: '[name].js',// 导出文件的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 设置模块如何被解析
  resolve: {
    // 自动解析确定的扩展名，导入模块时不带扩展名
    extensions: ['.js', '.vue', '.json'],
    // 创建import 或 require的别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // 在开发环境下 对于以.js或.vue后缀结尾的文件(在src目录下或test目录下的文件)，使用eslint进行文件语法检测。
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,// vue 文件后缀的
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.js$/,// js文件后缀的
        loader: 'happypack/loader?id=babel', // 原始loader替换成`happypack/loader`
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,// 处理图片后缀
        loader: 'url-loader',
        options: {
          limit: 10000,// 图片小于10000字节时以base64的方式引用
          name: utils.assetsPath('img/[name].[hash:7].[ext]')// 文件名为name.7位hash的值.扩展名
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,// 音频文件后缀
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,// 字体文件
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'babel',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true',
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    })
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
