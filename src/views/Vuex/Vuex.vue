<template>
  <div class="vuex">
    <h3>-----------我是VueX的内容--------------</h3>
    <h2>{{message}}</h2>
    <h5>{{$store.state.count}}</h5>
    <button @click="add(5)">+</button>
    <button @click="dec">-</button>
    <h3>-----------我是Test的内容--------------</h3>
    <test></test>
    <h3>-----------我是Vuex的getter的内容-------</h3>
    <h5>{{$store.getters.powerCount}}</h5>
    <h5>{{$store.getters.studentsAge}}</h5>
    <h3>-----------我是Vuex的getter作为参数的内容-------</h3>
    <h5>{{$store.getters.studentsGetter}}</h5>
    <h5>{{$store.getters.studentsGetterfun(30)}}</h5>
    <h3>-----------响应式修改值内容--------------</h3>
    <h5>{{$store.state.students}}</h5>
    <button @click="addstude">添加学生</button>
    <h3>-----------mutation常量类型--------------</h3>
    <button @click="mutation">定义常量++</button>
    <h3>-----------action异步更新数据信息--------------</h3>
    <button @click="action">{{$store.state.info.name}}</button>
    <button @click="aUpdateInfo('haha')">{{$store.state.info.name}}</button>
    <h3>-----------modules数据信息--------------</h3>
    <h2>{{$store.state.a.name}}</h2>
    <h3>-----------modules修改数据信息--------------</h3>
    <button @click="modulesUpdata">{{$store.state.a.name}}</button>
  </div>
</template>

<script>
import Test from "../Test/Test";
import {MUTAYION} from '@/store/mutationType';
import {mapActions} from 'vuex'
export default {
  name: "Vuex",
  data() {
    return {
      message: "我是Vuex组件",
      count: 0
    };
  },

  components: {
    Test
  },

  computed: {
    powerCount() {}
  },

  //   mounted: {},

  methods: {
    add(count) {
      //   payload 负载
      // 普通的提交封装
      // this.$store.commit('add',count);
      // 特殊的提交封装
      this.$store.commit({
        type: "add",
        count,
        age: "18"
      });
    }, 
    dec() {
      this.$store.commit("dec");
    },
    addstude() {
      this.$store.commit({
        type: "addstude",
        data: {
          id: 16,
          name: "f",
          age: "26"
        }
      });
    },
    mutation() {
      this.$store.commit(MUTAYION);
    },
    action(){
        // action异步操作修改信息不能直接提交commit必须通过dispatch,也可以在后面传参字符串或者对象
        // this.$store.commit('aUpdateInfo');
        // 写法一
        // this.$store.dispatch('aUpdateInfo',{
        //     message:"我是携带的信息",
        //     success:()=>{
        //         console.log('我是参数的回调函数')
        //     }
        // })
        // 写法二
        let data  = {type:"字符串",age:18}
        this.$store.dispatch('aUpdateInfo',data).then( (res) => {
            console.log(res)
        })
    },
    ...mapActions(['aUpdateInfo']),
    modulesUpdata(){
        this.$store.commit('modulesUpdata')
    }
  }
};


// Promise写法一：
// const aa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("reject接收请求后的返回参数");
//     // resolve("resolve接收请求后的返回参数");
//   }, 1000);
// }).then(
//   data => {
//     console.log("resolve请求后的返回参数" + data);
//     // Promise写法二
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // resolve(data);
//         reject("失败");
//       });
//     })
//       .then(data => {
//         console.log("成功" + data);
//         // 简写方法一
//         // return Promise.resolve("简写方法一" + data);
//         // return Promise.reject("简单写法一错误")
//         throw '我是手动抛出去的异常'
//       }).then((data)=>{
//           console.log(data + "2");
//           // return Promise.resolve("简写方法一");
//           return Promise.reject("简单写法一错误")
//           // return data + "简写方法二"
//       }).then((data)=>{
//         console.log(data+"3");
//         //  return Promise.resolve("简写方法一");
//          return Promise.reject("简单写法一错误")
//       }).then((data)=>{
//         console.log(data+"4");
//       }).catch((err)=>{
//          console.log(err+"2");
//       })
//       .catch(err => {
//         console.log(err+"1");
//       });
//   },
//   err => {
//     console.log("reject请求后的返回参数" + err);
//   }
// ); 
</script>
<style  scoped>
.vuex{
      overflow: scroll;
    height: 300px;
}
</style>