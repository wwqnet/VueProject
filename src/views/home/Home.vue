<template>
<div>
    <nav-bar class="home_navbar">
        <div slot="center">首页</div>
    </nav-bar>
</div>
    
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
    name:"Home",
    components:{
        NavBar
    }
}
</script>
<style scoped>
.home_navbar{
    background-color: palevioletred;
    color: white;
}
</style>
