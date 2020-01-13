<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/TabBar/1.png" alt>
      <img slot="item-icon-activ" src="~assets/TabBar/1.1.png" alt>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="~assets/TabBar/2.png" alt>
      <img slot="item-icon-activ" src="~assets/TabBar/1.2.png" alt>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="~assets/TabBar/3.png" alt>
      <img slot="item-icon-activ" src="~assets/TabBar/1.3.png" alt>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-icon" src="~assets/TabBar/4.png" alt>
      <img slot="item-icon-activ" src="~assets/TabBar/1.4.png" alt>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
const TabBar = () => import("@/components/common/tabbar/Tabbar");
const TabBarItem = () => import("@/components/common/tabbar/TabBarItem");
export default {
  name: "Miantabbar",
  components: {
    TabBar,
    TabBarItem
  }
};

// Promise写法一：
const aa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject接收请求后的返回参数");
    // resolve("resolve接收请求后的返回参数");
  }, 1000);
}).then(
  data => {
    console.log("resolve请求后的返回参数" + data);
    // Promise写法二
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(data);
        reject("失败");
      });
    })
      .then(data => {
        console.log("成功" + data);
        // 简写方法一
        // return Promise.resolve("简写方法一" + data);
        // return Promise.reject("简单写法一错误")
        throw '我是手动抛出去的异常'
      }).then((data)=>{
          console.log(data + "2");
          // return Promise.resolve("简写方法一");
          return Promise.reject("简单写法一错误")
          // return data + "简写方法二"
      }).then((data)=>{
        console.log(data+"3");
        //  return Promise.resolve("简写方法一");
         return Promise.reject("简单写法一错误")
      }).then((data)=>{
        console.log(data+"4");
      }).catch((err)=>{
         console.log(err+"2");
      })
      .catch(err => {
        console.log(err+"1");
      });
  },
  err => {
    console.log("reject请求后的返回参数" + err);
  }
); 
</script>
<style scoped>
</style>

