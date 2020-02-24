<template>
  <div class="swipeblock">
    <!-- <el-carousel height="200px">
      <el-carousel-item v-for="(item,index) in bannerlist" :key="index">
        <img class="bannerwith" :src="item.image" alt="">
      </el-carousel-item>
    </el-carousel> -->
    <van-swipe class="my-swipe" :autoplay="3000" height="200px" indicator-color="white">
        <van-swipe-item v-for='(item,index) in bannerlist' :key="index">
            <!-- <a :href="item.link"> -->
                <img :src="item.image" alt=""  @load="swipeimgload">
            <!-- </a> -->
        </van-swipe-item>
    </van-swipe>
  </div>
</template>


<<script>
export default {
   name:"Carousel",
   props: ['bannerlist'],
    data(){
        return {
            data:null,
            isload:false
        }
    },
    methods: {
      swipeimgload(){
        if(!this.isload){
         this.$emit("swipeimgload");
         this.isload = true
        }
      }
    },
}
</script>
<style>

.swipeblock{
    width: 100%;
    /* height: 200px; */
}
/* .my-swipe .van-swipe-item {
  height: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
} */
.my-swipe img{
 height: 200px;
 width: 100%;
}

/*.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.bannerwith{
    width: 100%;
    height: 100%;
}*/
</style>