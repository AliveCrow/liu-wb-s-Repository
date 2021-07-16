import axios from 'axios';

let config = {
    baseUrl:'http://localhost:3000',
    timeout:15000,
}
let request = axios.create(config)

request.interceptors.request.use(
    request=>{
        return request
    },
    error=>{
            return Promise.reject(error)
    }
)
request.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        return Promise.reject(error)
    }
)


export default request
