import axios from '../../utils/axios'

export const addArticle = options => {
  console.log(options, 'biubiu');
  return axios.setAxiosPostPromise('article/addArticle', options)
}


export const query = query => axios.setAxiosGetPromise('article', query)

export const get = query =>
  axios.setAxiosGetPromise('points/test_system', query)

export const deleteArticle = options =>
  axios.setAxiosDeletePromise('article/' + options)

export const update = (query, options) =>
  axios.setAxiosPutPromise('article/' + query, options)

export const getArticle = _id =>
  axios.setAxiosGetPromise('article/' + _id)
