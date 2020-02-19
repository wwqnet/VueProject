// The Vue build version to load with the `import` command
//baseURL='http://106.54.54.237:8080/api/hy' baseURL='http://123.207.32.32:8000/api/hy'
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import Axios from 'axios';
import '@/element_ui'
import 'element-ui/lib/theme-chalk/index.css';
// 使用vant  ui组件库
import { Swipe, SwipeItem,Tab, Tabs  } from 'vant';
import 'vant/lib/index.css';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 默认get请求
// Axios({
//   url:'http://httpbin.org',
//   method:'get',  //设置请求方式
//   // 专门针对get请求的参数拼接   http://httpbin.org?type=pop&page=2  params = ?type=pop&page=2
//   params:{
//     type:"pop",
//     page:2
//   }
// }).then(data =>{
//   console.log(data)
// })
// Axios请求方式二e
// Axios.get();Axios.post()
// Axios并发请求
// Axios.all([
//   Axios({
//     url:'http://httpbin.org',
//   }),
//   Axios({
//     url:'http://httpbin.org',
//   })
//   // result 返回结果已数组的形式存在
// ]).then(result => { 
//   console.log(result)
// })

// Axios.all([
//   Axios({
//     url:'http://httpbin.org',
//   }),
//   Axios({
//     url:'http://httpbin.org',
//   })
//   // result =》 res1  res2 返回结果数组展开
// ]).then(Axios.spread((res1,res2)=> { 
//   console.log(res1)
//   console.log(res2)
// }))

// 使用封装的Axios请求 
// import {request} from './AxiosRequest'
// request({
//   url:'http://httpbin.org',
// },(res)=>{
//   console.log(res)
// },(err)=>{
//   console.log(err)
// })

// 
// const config = {
// configdata:{
//   url:'http://httpbin.org',
// },
// success:(res)=>{
//    console.log(res)
// },
// filters:(err)=>{
//   console.log(err)
// }

// }

// request(config)

// Promise实例Axios
// request({
//   url:'http://httpbin.org',
// }).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })





