import axios from 'axios'

const apiMarvel = axios.create({
    baseURL: 'developer.marvel.com',
             'content-type': 'application/json;charset=utf-8',
})

export default apiMarvel