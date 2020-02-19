<template>
  <div class="navbar">
     <div class="left"><slot name='left'></slot></div>
     <div class="center"><slot name='center'></slot></div>
     <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  name:"NavBar",
  data () {
    return {
    };
  }

}

</script>
<style  scoped>
.navbar{
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 0px rgba(125,125,125,0.2);
}
.left, .right{
  width: 60px;
  background-color: pink;
}
.center{
flex: 1;
}
</style>

