<template>
  <div>
    <nav-Bar class="navbar">
      <div slot="left" class="left" @click="leftclick">
        <van-icon name="arrow-left" color="#333333" size="30"/>
      </div>
      <div slot="center">
        <div class="navtitle">
          <span
            v-for="(items,index) in title"
            :key="index"
            :class="{active: clickactiv === index}"
            @click="textclick(index)"
          >{{items}}</span>
        </div>
      </div>
      <div slot="right" class="right"></div>
    </nav-Bar>
    <better-scroll class="detailscroll" ref="detailBscoll" :probe-type="3" @scroll="detailscroll">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="my-swipeitem" v-for="(item,index) in banner" :key="index">
          <img class="swipimg" :src="item" alt>
        </van-swipe-item>
      </van-swipe>
      <div v-if="datainfo">
        <p class="detailyitle">{{datainfo.title}}</p>
        <div>
          <span class="highNowPrice">{{datainfo.price}}</span>
          <span class="oldPrice">{{datainfo.oldPrice}}</span>
          <span
            class="discountDesc"
            :style="{'background':datainfo.discountBgColor}"
          >{{datainfo.discountDesc}}</span>
        </div>
        <div class="xiaoliang">
          <span v-for="(item,index) in xiaoliang" :key="index">{{item}}</span>
        </div>
      </div>
      <shop-info
        :shopdatainfo="shopInfo"
        :detailImage="detailImage"
        :datasparams="goodsparams"
        :goodsrate="rate"
        :goodsskuinfo="skuInfo"
        ref="shopinfo"
      ></shop-info>
    </better-scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import { getDetailinfo, shopinfo, goodsParams } from "@/network/detail";

import ShopInfo from "@/components/common/shopinfo";

// 对滚动的问题进行优化 使用betterScorll
import betterScroll from "@/components/common/betterscroll.vue";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      data: {},
      title: ["商品", "参数", "详情", "推荐"],
      clickactiv: 0,
      banner: [],
      datainfo: null,
      xiaoliang: [],
      shopInfo: {},
      detailImage: {},
      goodsparams: {},
      rate: {},
      skuInfo: {},
      goodsoffsetTop: 0,
      ruleoffsetTop: 0,
      skusoffsetTop: 0,
      recommonedoffsetTop: 0
    };
  },
  components: {
    NavBar,
    ShopInfo,
    betterScroll
  },
  created() {
    this.iid = this.$route.params.id;
    //获取详情信息
    this.getDetailinfo();
    //
  },
  mounted() {},
  methods: {
    // 获取网络请求
    getDetailinfo() {
      let that = this;
      getDetailinfo(this.iid).then(res => {
        console.log(res);
        //  顶部轮播数据信息
        that.banner = res.result.itemInfo.topImages;
        that.datainfo = res.result.itemInfo;
        that.xiaoliang = res.result.columns.slice(0, 2);
        that.xiaoliang.push(res.result.itemInfo.extra.deliveryTime);
        // 获取商家信息
        that.shopInfo = new shopinfo(res.result.shopInfo);
        that.detailImage = res.result.detailInfo.detailImage[0];
        that.goodsparams = new goodsParams(
          res.result.itemParams.info,
          res.result.itemParams.rule
        );
        that.rate = res.result.rate.list[0] ? res.result.rate.list[0] : "";
        that.skuInfo = res.result.skuInfo;
        console.log(that.skuInfo);
        that.data = res.result;
      });
    },
    // 监听事件滚动
    detailscroll(position) {
      if (this.goodsoffsetTop == 0) {
        this.goodsoffsetTop = Number(this.$refs.shopinfo.goodsoffsetTop) - 300;
        this.ruleoffsetTop = Number(this.$refs.shopinfo.ruleoffsetTop) - 300;
        this.skus = Number(this.$refs.shopinfo.skus) - 300;
        this.recommonedoffsetTop =
          Number(this.$refs.shopinfo.recommonedoffsetTop) - 300;
      }
      if (0 < Number(-position.y) && Number(-position.y) < this.ruleoffsetTop) {
        this.clickactiv = 0;
      } else if (
        this.ruleoffsetTop < Number(-position.y) &&
        Number(-position.y) < this.skus
      ) {
        this.clickactiv = 1;
        console.log(this.clickactiv);
      } else if (
        this.skus < Number(-position.y) &&
        Number(-position.y) < this.recommonedoffsetTop
      ) {
        this.clickactiv = 2;
      } else if (this.recommonedoffsetTop < Number(-position.y)) {
        this.clickactiv = 3;
      }
    },
    leftclick() {
      this.$router.go(-1);
    },
    textclick(index) {
      this.clickactiv = index;
      switch (index) {
        case 0:
        this.$refs.detailBscoll.scrollTo(0,0,0);
        this.$refs.detailBscoll.refresh();
        break;
        case 1:
        this.$refs.detailBscoll.scrollTo(0,-(this.ruleoffsetTop + 260),0);
        this.$refs.detailBscoll.refresh();
        break;
        case 2:
        this.$refs.detailBscoll.scrollTo(0,-(this.skus + 260),0);
        this.$refs.detailBscoll.refresh();
        break;
        case 3:
        this.$refs.detailBscoll.scrollTo(0,-(this.recommonedoffsetTop + 260),0);
        this.$refs.detailBscoll.refresh();
        break;
      }
    }
  }
};
</script>
<style  scoped>
.left,
.right {
  background-color: white;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}
.navtitle {
  display: flex;
  justify-content: space-around;
}
.navtitle span {
  display: inline-block;
  padding: 0px 8px;
}
.active {
  border-bottom: 1px solid red;
  color: #ee0a24;
}
.my-swipe {
  height: 300px;
}
.my-swipeitem {
  height: 100%;
}
.swipimg {
  width: 100%;
  height: 100%;
}
.detailyitle {
  font-size: 16px;
  font-weight: 600;
  text-indent: 5px;
  margin: 5px 0px;
}
.highNowPrice {
  padding-left: 10px;
  font-size: 20px;
  color: #f13e3a;
}
.oldPrice {
  color: grey;
  font-size: 10px;
  text-decoration: line-through;
}
.discountDesc {
  font-size: 6px;
  position: relative;
  color: white;
  border-radius: 10%;
  bottom: 10px;
}
.xiaoliang {
  display: flex;
  padding: 20px 10px 6px 10px;
  color: grey;
  justify-content: space-between;
  font-size: 12px;
  box-shadow: 0 2px 0 0 rgba(225, 225, 225, 0.5);
}
.detailscroll {
  height: 400px;
  /* height: calc(100% - 93px); */
}
.navbar {
  background-color: white;
  position: relative;
  z-index: 9;
}
</style>