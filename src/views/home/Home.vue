<template>
  <div id="home">
    <!-- 导航标题信息 -->
    <nav-bar class="home_navbar">
      <div slot="center">首页</div>
    </nav-bar>
    <tab-control 
     class="showtabcontrol" 
     :goodsinfotitle="goodinfo.title" 
     @tabclick="hometabclick"
     :tabcontrolAvtive="Tabcontrolavtive"
     ref="tabcontrol1"
     v-if="tabcontrolishow"
     ></tab-control>
    <!-- 对第三方组件进行一个简单封装便于后期对组件的维护 -->
    <better-scroll
      class="homescroll"
      ref="bScroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="homescroll"
      @homepullingUp="homepullingUp"
    >
      <!-- 首页 轮播信息 -->
      <carousel class="weiperbanner" :bannerlist="banner" @swipeimgload="homeswipeimgload"></carousel>
      <!-- 信息介绍 -->
      <recommend-view :recommenddate="recommend"></recommend-view>

      <key-words :keywordsdate="keywords"></key-words>

      <tab-control
        class="tabcontrol"
        :goodsinfo="goodinfo"
        :goodsinfotitle="goodinfo.title"
        :tabcurrentType="currentType"
        @tabclick="hometabclick"
        ref="tabcontrol2"
      ></tab-control>
    </better-scroll>

    <!-- 回到顶部按钮事件 -->
    <back-top v-show="BackTopclick" class="homeback-top" @backTopclick="homebackTopclick"></back-top>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";

import Carousel from "@/components/Carousel/Carusel";

import RecommendView from "./childComps/RecommendView";

import KeyWords from "./childComps/keywords";

import TabControl from "@/components/content/tabControl/TabControl";

import { getHomeMultidate, getHomeGoodsitems } from "@/network/home";

// 对滚动的问题进行优化 使用betterScorll
import betterScroll from "@/components/common/betterscroll.vue";

import BackTop from "@/components/common/backTop";

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
        title: ["流行", "新款", "精选"],
        data: {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] }
        }
      },
      currentType: "pop",
      BScroll: null,
      BackTopclick: false,
      taboffsetTop: 0,
      tabcontrolishow: false,
      Tabcontrolavtive:0,
      settim:null,
      positionY:0
    };
  },

  components: {
    NavBar,
    Carousel,
    RecommendView,
    KeyWords,
    TabControl,
    betterScroll,
    BackTop
  },
  activated(){
        console.log("进来");
         // 通过$ref获取组件 对象 this.$refs.bScroll
      this.$refs.bScroll.scrollTo(0, this.positionY,0);
      this.$refs.bScroll.refresh();

  },
  deactivated(){
        this.positionY = this.$refs.bScroll.scrolly()
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
  mounted() {
    // 通事件总线监听 子组件下面的子组件之间的通行
    const refresh = this.$refs.bScroll.refresh();
    this.$bus.$on("itemimgload", () => {
      // 每次图片加载完成后 从新计算高度  对于频繁刷新使用防抖操作或者节流
      this.debounce(refresh, 500);
    });
  },
 
  methods: {
    //   事件监听相关方法
    hometabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
        this.Tabcontrolavtive =index;
        this.$refs.tabcontrol2.active = index;
    },
    // 滚动监听事件
    homescroll(position) {
      // 判断backtop按钮是否显示
      if (-position.y > 3000) {
        this.BackTopclick = true;
      } else {
        this.BackTopclick = false;
      }
      // 判断tabcontrol是否吸顶。
      this.tabcontrolishow = -position.y > this.taboffsetTop;
      //将tab1进行点击
    },
    // 上拉加载更多   当上拉加载数据加载完毕后，需要调用此方法 finishPullUp 告诉 better-scroll 数据已加载。
    homepullingUp() {
      this.meths_getHomeGoodsitems(this.currentType);
      // scroll进行刷新 从新计算高度
      this.$refs.bScroll.refresh();
    },
    homebackTopclick() {
      // 通过$ref获取组件 对象 this.$refs.bScroll
      this.$refs.bScroll.scrollTo(0, 0, 300);
    },
    // 防抖操作
    debounce(func, wait) {
      let timeout;
      return function(...args) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      };
    },
    // 获取tabcontrol的位置 h获取组件元素的方法 $el
    homeswipeimgload() {
      this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop ;
    },
    //   网络请求相关方法
    meths_getHomeGoodsitems(type) {
      const page = this.goodinfo.data[type].page + 1;
      getHomeGoodsitems(type, page).then(res => {
        // console.log(res);
        this.goodinfo.data[type].list.push(...res.data.list);
        this.goodinfo.data[type].page += 1;
        // 调用此方法 finishPullUp 告诉 better-scroll 数据已加载。
        this.$refs.bScroll.finishPullUp();
      });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
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
.homescroll {
  height: calc(100% - 93px);
}
.showtabcontrol{
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 43px;
  background-color: white;
}
</style>
