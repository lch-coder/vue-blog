import axios from 'axios'
import qs from 'qs'
import { baseUrl } from '../config/axiosConfig'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: baseUrl,
  paramsSerializer: params => {
    return qs.stringify({ params: params })
  },
})

service.defaults.timeout = 60000
service.defaults.withCredentials = true
service.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
service.defaults.headers['Access-Control-Allow-Origin'] = '*'
service.defaults.headers['Cache-Control'] =
  'no-cache,no-store,must-revalidate,max-age=-1,private'
// service.defaults.baseURL = baseUrl

// 请求发送前拦截
service.interceptors.request.use(
  config => {
    // const token = localStorage.getItem('token')
    // config.headers.common['Authorization'] = 'Bearer ' + token
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    return res
  },
  error => {
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          window.location.href = '/NotFound'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        Message.error('服务器响应超时，请刷新当前页')
      }
      error.message('连接服务器失败')
    }
    return Promise.reject(error)
  }
)

export default {
  setAxiosGetPromise: (url, params = {}) => {
    return service
      .get(timestamp(url), { params })
      .then(response => {
        return response
      })
      .catch(err => {
        throw err
      })
  },
  setAxiosPostPromise: (url, data) => {

    console.log(data, 'sad1');
    return service
      .post(url, data)
      .then(response => {
        return response
      })
      .catch(err => {
        throw err
      })
  },
  // 更新
  setAxiosPutPromise: (url, data) => {
    return service
      .put(url, data)
      .then(response => {
        return response
      })
      .catch(err => {
        throw err
      })
  },
  setAxiosDeletePromise: (url, data) => {
    return service
      .delete(url, { data: data })
      .then(response => {
        return response
      })
      .catch(err => {
        throw err
      })
  },
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
