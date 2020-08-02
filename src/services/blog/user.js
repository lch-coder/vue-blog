import axios from '../../utils/axios'

export const query = query => axios.setAxiosGetPromise('user', query)

export const login = options => axios.setAxiosPostPromise('user/login', options)

export const regist = options =>
    axios.setAxiosPostPromise('user/addUser', options)
