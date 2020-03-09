import Vue from 'vue'
import Vuex from 'vuex'
import { MUTAYION } from '@/store/mutationType'
// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state: {   // 全局存放状态
        count: 100,
        students: [
            { id: 11, name: "kobe", age: "18" },
            { id: 12, name: "zms", age: "27" },
            { id: 13, name: "hd", age: "35" },
            { id: 14, name: "wsblk", age: "50" },
            { id: 15, name: "kl", age: "23" }
        ],
        info: {
            name: "kob"
        }
    },
    mutations: {   //修改全局state状态 需要通过mutations 
        // mutation常量类型
        [MUTAYION](state) {
            state.count++;
        },
        //   方法
        add(state, payload) {
            console.log(payload)
            console.log(typeof payload.count)
            state.count += payload.count;
        },
        dec(state) {
            state.count--;
        },
        addstude(state, payload) {
            // 响应式修改值内容
            Vue.set(state.students, 5, payload.data)
            console.log(state.students)
            Vue.delete(state.students[3], 'name')
        },
        aUpdateInfo(state) {
            state.info.name = 'zms'
        }
    },
    // 异步操作
    actions: {    //单纯的业务逻辑
        //   context上下文,payload组件方法的参数
        // 写法一
        //   aUpdateInfo(context,payload){
        //      setTimeout(() => {
        //         context.commit('aUpdateInfo');
        //         console.log(payload.message);
        //         payload.success();
        //      }, 1000);
        //   }
        // 写法二通过Promis完成回调
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('aUpdateInfo');
                    console.log(payload);
                    resolve('执行成功');
                }, 1000);
            })
        }
    },
    getters: {   //对state数据进行包装  ，例如过滤等类似于计算属性
        powerCount(state) {
            return state.count * state.count
        },
        studentsAge(state) {
            // 写法一
            // return state.students.filter((s) => {
            //     return s.age > 20;
            // })
            // 写法二
            return state.students.filter(s => s.age > 20)
        },
        studentsGetter(state, getters) {
            return getters.studentsAge.length;
        },
        // getter返回函数
        studentsGetterfun(state) {
            // 写法一
            // return function(age){
            //     return state.students.filter(s => s.age > age) 
            // }
            // 写法二
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    // 定义模块信息
    modules: {
        a: {
            state: {
                name: "modules内容"
            },
            mutations: {
                modulesUpdata(state){
                    state.name = "Cl"
                }
            },
            actions: {

            },
            getters: {

            }
        },
        b: {
            state: {

            },
            mutations: {

            },
            actions: {

            },
            getters: {

            }
        }
    }
})
// 导出Store 独享
export default store

