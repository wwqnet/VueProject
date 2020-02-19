<template>
  <div class="GoodsList">
      <div class="goodsitems" v-for="(item,index) in goodsiteminfo.list" :key="index">
          <img :src="item.show.img" alt>
          <span class="title">{{item.title}}</span>
          <span>{{item.price}}</span>
          <span>{{item.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goodsiteminfo: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {
    //  console.log(this.goodsiteminfo)
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