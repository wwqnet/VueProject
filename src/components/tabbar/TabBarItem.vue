<template>
    <div class="tabBar_item" @click="itemClick">
        <slot v-if="!isActive"  name="item-icon"></slot>
        <slot v-else name="item-icon-activ"></slot>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <!-- <img src="../../assets/img/TabBar/1.png" alt>
        <div>首页</div> -->
    </div>

</template>
<script>
export default {
  name: "TabBarItem",
  props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
  },
  data(){
    return{
      // isActive:true
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}  : {};
    }
  }
};

</script>

<style scoped>
.tabBar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabBar_item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>

