<template>
  <div id="app">
    <mian-tab-bar></mian-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
// import TabBar from "./components/tabbar/tabbar";
// import TabBarItem from "./components/tabbar/TabBarItem";

import MianTabBar from "./components/content/Miantabbar";
export default {
  name: "App",
  components: {
    MianTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
#app {
  margin-bottom: 49px;
}
</style>
