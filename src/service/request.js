import axios from "axios"
import {
    tip
} from "./tips"

const baseURL = process.env.NODE_ENV === 'production' ?"http://60.205.95.118:8000":"/api"


const service = axios.create({
    baseURL: baseURL,
    timeout: 500000
})

//请求拦截
service.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem("token") || ""
    return config
}, err => {
    Promise.reject(err)
})

//响应拦截
service.interceptors.response.use(response => {
    console.log(response, "正常响应拦截")
    // tip(response?.data, "success")
    return response
}, err => {
    console.log(err.response.data,"错误响应拦截");
    if(err.response.status === 504){
        tip("服务未启动")
        return 
    }
    tip(err.response.data)
})



service.get = (request) =>
    new Promise((resolve, reject) => {
        service({
            ...request,
            method: "get",
        }).then(res => {
            resolve(res?.data)
        }).catch(err => {
            reject(err)
        })
    })


service.post = (request) =>
    new Promise((resolve, reject) => {
        service({
            ...request,
            method: "post",
        }).then(res => {
            resolve(res?.data)
        }).catch(err => {
            reject(err)
        })
    })

service.delete = (request) =>
    new Promise((resolve, reject) => {
        service({
            ...request,
            method: "delete",
        }).then(res => {
            resolve(res?.data)
        }).catch(err => {
            reject(err)
        })
    })

service.patch = (request) =>
    new Promise((resolve, reject) => {
        service({
            ...request,
            method: "patch",
        }).then(res => {
            resolve(res?.data)
        }).catch(err => {
            reject(err)
        })
    })






export default service