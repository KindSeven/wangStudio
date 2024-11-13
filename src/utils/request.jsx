import axios from "axios";
import { BaseURL } from './baseURL'
// import { getToken, removeToken } from "./tokne";
// import router from "../router";

const request = axios.create({
    // baseURL: "http://127.0.0.1:7789/",
    baseURL: BaseURL,
    timeout: 5000
})

request.interceptors.request.use((config) => {
    // const token = getToken();
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return config;
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    // if (err.response.status === 401) {
    //     removeToken()
    //     router.navigate('/login')
    //     window.location.reload()
    // }
    return Promise.reject(err)
})
export { request }