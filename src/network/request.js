import Axios from 'axios'

export function request(config){
    const instance = Axios.create({
        baseURL:"http://106.54.54.237:8000/api/hy",
        // baseURL:"http://123.207.32.32:8000/api/hy",
        timeout:5000
    })
    // 请求拦截
    instance.interceptors.request.use((config)=>{
        return config
    },err=>{
    console.log('请求拦截出现错误')
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err +"数据请求失败！")
    })
    return instance(config)
}
