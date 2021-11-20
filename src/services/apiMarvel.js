import axios from 'axios'

const apiMarvel = axios.create({
    baseURL: 'https://gateway.marvel.com ',
             'content-type': 'application/json;charset=utf-8',
             'apikey': '32d8bdfb0a9d2e6e23c4a31c88e0c528'
})

export default apiMarvel