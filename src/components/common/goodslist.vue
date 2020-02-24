<template>
  <div class="GoodsList">
      <div class="goodsitems" v-for="(item,index) in goodsiteminfo.list" :key="index" @click="itemclick(item)">
          <img :src="item.show.img" alt @load="imageLoate">
          <span class="title">{{item.title}}</span>
          <span>{{item.price}}</span>
          <span>{{item.cfav}}</span>
      </div>
  </div>
</template>

<script>
// import BScroll from "better-scroll";


export default {
  name: "GoodsList",
  props: {
    goodsiteminfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  created() {
     console.log(this.goodsiteminfo)
  },
  mounted(){
      // let GoodsList = document.querySelector(".GoodsList");
      // let GoodsListscroll = new BScroll(GoodsList);
  },
  methods:{
    // vue 图片加载完成监听 @load="方法名"
    // 事件总线 （非父子组件之间的通信） 定义事件 this.$bus.$emit("事件名称") 事件监听 this.$bus.on("事件名称"，()=>{})
    imageLoate(){
      this.$bus.$emit("itemimgload")
    },
    // 点击跳转到详情页面
    itemclick(item){
      this.$router.push('/detail/' + item.iid)
    }
  }
};
</script>
<style  scoped>

.GoodsList{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.goodsitems{
  width: calc(50% - 8px) ;
  padding: 2px;
}
.goodsitems img{
  width: 100%;
  height: 228px;
}
.title{
  font-size: 14px;
  display:block;
  overflow:hidden;
  word-break:keep-all;
  white-space:nowrap;
  text-overflow:ellipsis;
}
</style>