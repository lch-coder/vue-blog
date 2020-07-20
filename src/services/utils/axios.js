import axios from 'axios'
import {baseUrl1} from '../../config/axiosConfig'
import ElementUI from 'element-ui'

const service = axios.create({
  baseURL: baseUrl1
})

service.defaults.timeout = 60000
service.defaults.withCredentials = true
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
service.defaults.headers['Access-Control-Allow-Origin'] = '*'
service.defaults.headers['Cache-Control'] = 'no-cache,no-store,must-revalidate,max-age=-1,private'
// service.defaults.baseURL = baseUrl

// 请求发送前拦截
service.interceptors.request.use(config => {
  // const token = localStorage.getItem('token')
  // config.headers.common['Authorization'] = 'Bearer ' + token
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  return res
},
error => {
  let msg
  if (error.response.status) {
    switch (error.response.status) {
      case 400:
        msg = '请求错误，请稍后重试'
        break
      case 403:
        msg = '拒绝访问(403)'
        break
      case 404:
        msg = '请求出错(404)'
        break
      case 500:
        msg = '服务器错误(500)，请稍后重试！'
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
    return service.get(timestamp(url), {params: params}).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  },
  setAxiosPostPromise: (url, data) => {
    return service.post(url, data).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  },
  // 更新全部
  setAxiosPutPromise: (url, data) => {
    return service.put(url, data).then(response => {
      return response
    }).catch(err => {
      throw err
    })
  },
  setAxiosDeletePromise: (url, data) => {
    return service.delete(url, {data: data}).then(response => {
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
