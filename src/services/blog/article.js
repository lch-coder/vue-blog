import axios from '../../utils/axios'

export const addArticle = options => {
  return axios.setAxiosPostPromise('article/addArticle', options)
}

export const archive = () => axios.setAxiosGetPromise('article/archive')

export const query = query => axios.setAxiosGetPromise('article', query)

export const get = query =>
  axios.setAxiosGetPromise('points/test_system', query)

export const deleteArticle = options =>
  axios.setAxiosDeletePromise('article/' + options)

export const update = (query, options) =>
  axios.setAxiosPutPromise('article/' + query, options)

export const getArticle = _id =>
  axios.setAxiosGetPromise('article/' + _id)
