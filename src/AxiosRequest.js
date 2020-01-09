import Axios from "axios";
// 创建Axios实例
// const instance = Axios.create({
//     baseURL:"https://",
//     timeout:5000
// })

// 调用实例发送Axios请求
// instance({
//     url:"/home"
// }).then(res =>{
//     console.log(res)
// })

// instance({
//     url:"/home",
//     params:{
//         type:'pop',
//         page:1
//     } 
// }).then(res =>{console.log(res)})


// export function request(config) {
//    const instance = Axios.create({
//        baseURL:"设置默认路径",
//        timeout:5000
//    })
// //    发送真正的网络请求
//    instance(config).then(
//        res => {
//           console.log(res)
//        }
//    ).catch(err => {
//        console.log(err)
//    })
// }
// 通过回调方式将数据返回 uccess,failure传入的函数
// export function request(config,success,failure) {
//     const instance = Axios.create({
//         baseURL:"",
//         timeout:5000
//     })
//  //    发送真正的网络请求
//     instance(config).then(
//         res => {
//            console.log(res);
//            success(res)
//         }
//     ).catch(err => {
//         console.log(err);
//         failure(err)
//     })
//  }

//  将数据和回调函数已对象的形式传入

// export function request(config){
//     const instance = Axios.create({
//         baseURL:'',
//         timeout:5000
//     })
//     instance(config).then((res)=>{
//         config.success(res)
//     }).catch((err)=>{
//         config.filters(err)
//     })
// }

// 结合Promise实现axios实例化
// export function request(config){
//     return new Promise((resolve,reject)=>{
//         const instance = Axios.create({
//             baseURL:'',
//             timeout:5000
//         })
//         instance(config).then((res)=>{
//             resolve(res)
//         }).catch((err)=>{
//             reject(err)
//         })
//     })
// }


export function request(config){
        const instance = Axios.create({
            baseURL:'',
            timeout:5000
        })
       
// Axios 拦截器   请求拦截
       instance.interceptors.request.use(res=>{
        //    res拦截参数是config,拦截后需要再将参数return 返回
           console.log(res)
           return res
       },err =>{

       })
    //    响应拦截
       instance.interceptors.response.use(res=>{
        //   res为返回的结果，通常做数据的处理过滤等等
        console.log(res)
        return res
       },err=>{

       })
       return instance(config)
}