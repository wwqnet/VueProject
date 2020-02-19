<template>
  <div class="tab-control">
    <!-- <div
      class="tab-controlitems"
      v-for="(items,index) in titles"
      :key="index"
      :class="{active:index === currindex}"
      @click="tabclick(index)">
      <span>{{items}}</span>
    </div>-->
    <!-- <tabs v-model="active" sticky>
      <tab v-for="(items,index) in titles" :key="index">内容 {{ items }}</tab>
    </tabs>-->
    <van-tabs  v-model="active" @click="tabclick" sticky>
      <van-tab v-for="(items,index) in goodsinfo.title"  :title="items"  :key="index"  >
          <goods-list :goodsiteminfo ="goodsinfo.data[tabcurrentType]"></goods-list>
      </van-tab>
      
    </van-tabs>
  </div>
</template>

<script>
// import { Tab, Tabs } from 'vant';
import GoodsList from '@/components/common/goodslist'
export default {
  name: "TabControl",
  props: {
    goodsinfo: {
      type:Object,
      default() {
        return {};
      }
    },
    tabcurrentType:{
       type:String,
       default(){
           return ''
       }
    }
  },
  data() {
    return {
      currindex: 0,
      currdateinfo:"pop",
      active: ""
    };
  },
  components: {
      GoodsList
  },
  created(){
    console.log(this.goodsinfo)
  },
  methods: {
    tabclick(index) {
    //   点击事件传递 子传父用自定义事件 $emit
      this.$emit('tabclick',index)
    }
  }
};
</script>
<style  >
/* .tab-control {
  background-color: white;
  display: flex;
  align-items: center;
  text-align: center;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
}
.tab-controlitems {
  flex: 1;
} */
/* .active {
  color: rgb(248, 135, 154);
}
.active span {
  padding: 3px 6px;
  border-bottom: 2px solid rgb(248, 135, 154);
} */
.tab-control .van-sticky--fixed{
    top: 44px !important;
}
</style>