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


</script>
<style scoped>

</style>

