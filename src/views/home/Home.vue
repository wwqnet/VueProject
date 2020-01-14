<template>
<div>
    <nav-bar class="home_navbar">
        <div slot="center">首页</div>
    </nav-bar>
</div>
    
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidate} from '@/network/home'
export default {
    name:"Home",
    data(){
        return {
            message:"who is he",
            date:null
        }
    },
    components:{
        NavBar
    },
    created(){
        //1. 发送请求多个数据
        getHomeMultidate().then(res =>{
            console.log(res + "我将更改数据信息")
            this.date = res;
        });
    }
}

</script>
<style scoped>
.home_navbar{
    background-color: palevioletred;
    color: white;
}
</style>
