<template>
  <div class="backTop">
      <van-icon name="upgrade" color="red" size="40" @click="backTopclick"/>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  methods:{
     backTopclick(){
        //  自定义事件事件传递this.$emit()
         this.$emit("backTopclick");
     }
  }
};
</script>
<style  scoped>
.backTop{
    position:fixed;
    right: 10px;
    bottom: 60px;
    z-index: 99;
}
</style>