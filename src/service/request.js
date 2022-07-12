import axios from "axios"
import { tip } from "./tips"

const service = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 500000
})

//请求拦截
service.interceptors.request.use(config => {
    config.headers.Authorization = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6ImFsaWNlIiwiaWF0IjoxNjU3NjE1OTI3LCJleHAiOjE2NTc3MDIzMjd9.EvtMKsHSbJqkQ6iDwrP9bR2O7d2VhrbY4_6gBn9Hdn2hI0dfWnWYnMYWzeHABG1rZN8eGhhPIL_cgF8OX3Nri6HQR9ZNJS6OJS4xYQaEfQMkPB2SBOZrMg3cHJCq-7Oe_rJuhZMaXBfn0xPtB2il7yJcj0IvX5LXp4ul9kdUvOo"
    return config
}, err => {
    Promise.reject(err)
})

//响应拦截
service.interceptors.response.use(response => {
    console.log(response,"正常响应拦截")
    tip(response.data,"success")
    return response
}, err => {
    // console.log(err.response.data,"错误响应拦截");
    tip(err.response.data)
    return err
})

export function request(...data) {
    const obj = data[0]
    return new Promise((resolve, reject) => {
        service({
            ...obj
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}


