// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios';

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
Axios({
  url:'http://httpbin.org',
  method:'get',  //设置请求方式
  // 专门针对get请求的参数拼接   http://httpbin.org?type=pop&page=2  params = ?type=pop&page=2
  params:{
    type:"pop",
    page:2
  }
}).then(data =>{
  console.log(data)
})
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

Axios.all([
  Axios({
    url:'http://httpbin.org',
  }),
  Axios({
    url:'http://httpbin.org',
  })
  // result =》 res1  res2 返回结果数组展开
]).then(Axios.spread((res1,res2)=> { 
  console.log(res1)
  console.log(res2)
}))

