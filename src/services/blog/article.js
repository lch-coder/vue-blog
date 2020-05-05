import axios from '../utils/axios'

export const addArticle = (options) => axios.setAxiosPostPromise('article/addArticle', options)

export const query = (query) => axios.setAxiosGetPromise('article', query)

export const deleteArticle = (options) => axios.setAxiosDeletePromise('article/' + options)

export const update = (query, options) => axios.setAxiosPutPromise('article/' + query, options)

export const getArticle = (_id) => axios.setAxiosGetPromise('article/findOne/' + _id)
