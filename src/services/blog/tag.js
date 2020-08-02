import axios from '../../utils/axios'

export const addTag = options =>
    axios.setAxiosPostPromise('tag/addTag', options)

export const query = query => axios.setAxiosGetPromise('tag', query)

export const deleteTag = options =>
    axios.setAxiosDeletePromise('tag/' + options)
