<template>
 <div class="cart_div">
     <nav-bar class="cart">
         <div slot="left">返回</div>
         <div slot="center">购物车({{count}})</div> 
     </nav-bar>
     <vuex></vuex>
 </div>
    
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar';
import Vuex from '@/views/Vuex/Vuex'
export default {
    name:"Cart",
     data(){
        return{
            count:0,
            message:"计算总数"
        }
    },
    components:{
        NavBar,
        Vuex
    }
}
</script>
<style scoped>
.cart{
    background-color: red;
    text-align: center;
    color: white;
}
</style>