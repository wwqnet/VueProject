import Axios from 'axios'

export function request(config){
    const instance = Axios.create({
        baseURL:"",
        timeout:5000
    })
    instance.interceptors.request.use((config)=>{
        return config
    },err=>{
    
    })
    instance.interceptors.response.use(res => {
        return res
    },err => {
        console.log(err)
    })
    return instance(config)
}
