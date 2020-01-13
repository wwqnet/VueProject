<template>
  <div>
     <nav-bar class="profile">
       <div slot="left">返回</div>
       <div slot="center">我的</div>
     </nav-bar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:"Profile",
    components:{
      NavBar
    }
}
</script>
<style scoped>
.profile{
  color: white;
  background-color: slategrey;
  text-align: center;
}
</style>