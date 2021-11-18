import axios from 'axios'

const apiMarvel = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
             'content-type': 'application/json;charset=utf-8',
})

export default apiMarvel