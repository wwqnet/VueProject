<template>
  <div id="home">
    <!-- 导航标题信息 -->
    <nav-bar class="home_navbar">
      <div slot="center">首页</div>
    </nav-bar>
    <!-- 首页 轮播信息 -->
    <carousel class="weiperbanner" :bannerlist="banner"></carousel>
    <!-- 信息介绍 -->
    <recommend-view :recommenddate="recommend"></recommend-view>

    <key-words :keywordsdate="keywords"></key-words>

    <tab-control class="tabcontrol" :goodsinfo="goodinfo" :tabcurrentType="currentType"  @tabclick="hometabclick"></tab-control>

  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";

import Carousel from "@/components/Carousel/Carusel";

import RecommendView from "./childComps/RecommendView";

import KeyWords from "./childComps/keywords";

import TabControl from "@/components/content/tabControl/TabControl";

import { getHomeMultidate, getHomeGoodsitems } from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      message: "who is he",
      date: null,
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goodinfo: {
        title: ["流行", "新款" ,"精选"],
        data: {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] }
        }
      },
      currentType:'pop'
    };
  },

  components: {
    NavBar,
    Carousel,
    RecommendView,
    KeyWords,
    TabControl
  },
  created() {
    //1. 在 生命周期函数 created()  创建请求数据信息
    getHomeMultidate().then(res => {
      console.log(res);
      // 数据请求成功后  将获取的数据存储起来
      if (res.success) {
        this.banner = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
        console.log(this.banner);
      } else {
        console.log("数据请求失败！");
      }
    });
    // 获取tabcontrol的数据信息
    this.meths_getHomeGoodsitems("pop");
    this.meths_getHomeGoodsitems("new");
    this.meths_getHomeGoodsitems("sell");
  },
  methods: {
    //   事件监听相关方法
    hometabclick(index){
        console.log(index)
        switch(index){
            case 0 :
                this.currentType = 'pop'
                break
            case 1 :
                this.currentType = 'new'
                break
            case 2 :
                this.currentType = 'sell'    
        }
    },
    //   网络请求相关方法
    meths_getHomeGoodsitems(type) {
      const page = this.goodinfo.data[type].page + 1;
      getHomeGoodsitems(type, page).then(res => {
        // console.log(res);
        this.goodinfo.data[type].list.push(...res.data.list);
        this.goodinfo.data[type].page += 1;
        console.log(this.goodinfo.data[type]);
      });
    },
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home_navbar {
  background-color: pink;
  color: white;
  font-size: 20px;
  /* 固定导航栏 */
  position: fixed;
  top: 0px;
  z-index: 99;
  width: 100%;
}
/* .tabcontrol {
  position: sticky;
  top: 44px;
} */
</style>
