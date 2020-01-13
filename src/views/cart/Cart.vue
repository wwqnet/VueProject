<template>
 <div>
     <nav-bar class="cart">
         <div slot="left">返回</div>
         <div slot="center">购物车({{count}})</div> 
     </nav-bar>
 </div>
    
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:"Cart",
     data(){
        return{
            count:0,
            message:"计算总数"
        }
    },
    components:{
        NavBar
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