import axios from 'axios'
import {baseUrl} from '../../config/axiosConfig'
import ElementUI from 'element-ui'

axios.defaults.timeout = 60000
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers['Cache-Control'] = 'no-cache,no-store,must-revalidate,max-age=-1,private'
axios.defaults.baseURL = baseUrl

// 请求发送前拦截
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.common['Authorization'] = 'Bearer ' + token
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(res => {
  return res
},
error => {
  let msg
  if (error.response.status) {
    switch (error.response.status) {
      case 400:
        msg = '请求错误(400)，请重新申请'
        break
      case 401:
        msg = '登录错误(401)，请重新登录'
        break
      case 403:
        msg = '拒绝访问(403)'
        break
      case 404:
        msg = '请求出错(404)'
        break
      case 408:
        msg = '请求超时(408)'
        break
      case 500:
        msg = '服务器错误(500)，请稍后重试！'
        break
      case 501:
        msg = '服务未实现(501)'
        break
      case 502:
        msg = '网络错误(502)'
        break
      case 503:
        msg = '服务不可用(503)'
        break
      case 504:
        msg = '网络超时(504)'
        break
      case 505:
        msg = 'HTTP版本不受支持(505)'
        break
      default:
        msg = '网络连接出错'
    }
  } else {
    msg = '连接服务器失败,请退出重试!'
  }
  ElementUI.Message({
    message: msg,
    type: 'warning'
  })
  return Promise.reject(error)
})

export default {
  setAxiosGetPromise: (url, params = {}) => {
    return axios.get(timestamp(url), {params: params}).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  },
  setAxiosPostPromise: (url, data) => {
    return axios.post(url, data).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  },
  // 更新全部
  setAxiosPutPromise: (url, data) => {
    return axios.put(url, data).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  },
  setAxiosDeletePromise: (url, data) => {
    return axios.delete(url, {data: data}).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  }
}

// 判断是否IE浏览器,并生成时间戳
function timestamp (url) {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    var getTimestamp = new Date().getTime()
    if (url.indexOf('?') > -1) {
      url = url + '×tamp=' + getTimestamp
    } else {
      url = url + '?timestamp=' + getTimestamp
    }
  }
  return url
}
