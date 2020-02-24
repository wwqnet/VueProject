<template>
  <div>
    <div ref="goodsoffsetTop">
      <div class="img_content">
        <img class="img" :src="shopdatainfo.logo" alt>
      </div>

      <span class="name_content">{{shopdatainfo.name}}</span>
    </div>
    <div class="infoconten">
      <div class="sells">
        <h3>{{shopdatainfo.sells | fiexd}} 万</h3>
        <h4>总销量</h4>
      </div>
      <div class="goodscount">
        <h3>{{shopdatainfo.goodscount}}</h3>
        <h4>全部宝贝</h4>
      </div>
      <div>
        <div v-for="(items,index) in shopdatainfo.score" :key="index">
          <span>{{items.name}}</span>&nbsp;&nbsp;&nbsp;
          <span
            class="score"
            :style="{color:items.isBetter?'green':'red'}"
          >{{items.score}}</span>&nbsp;&nbsp;&nbsp;
          <span
            :class="[ { isBettercativ: items.isBetter },{isBettercativbg:!items.isBetter} ]"
          >{{items.isBetter | isBetter}}</span>
        </div>
      </div>
    </div>
    <div class="button_conten">
      <div class="button">进店逛逛</div>
    </div>
    <!-- 商品 -->
    <div>
      <div>
        <h3 class="keytitle">{{detailImage.key}}</h3>
        <div class="img_cont" v-for="(items,index) in detailImage.list" :key="index">
          <img :src="items" alt>
        </div>
      </div>
    </div>
    <!-- 参数 -->
    <div ref="ruleoffsetTop">
      <div class="goodsrateMore">
        <span>商品参数</span>
      </div>
      <div v-if="datasparams.img">
        <img src="datasparams.img" alt>
      </div>
      <div class="table_bottom">
        <table>
          <tr v-for="(items,index) in rule" :key="index">
            <td v-for="(items,index) in items" :class="{tableone:index == 0}" :key="index">{{items}}</td>
          </tr>
        </table>
      </div>
      <div class="table_bottom">
        <table>
          <tr v-for="(items,index) in datasparams.info" :key="index">
            <td :class="{tableone:true}">{{items.key}}</td>
            <td class="Textcolor">{{items.value}}</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 用户评价 -->
    <div class="goodsrateMore_div" v-if="goodsrate.user">
      <div class="goodsrateMore">
        <span>用户评价</span>
        <span class="titleMore">更多</span>
      </div>
      <div class="title">
        <img class="titleimg" :src="goodsrate.user.avatar" alt>
        &nbsp;&nbsp;&nbsp;
        <span>{{goodsrate.user.uname}}</span>
      </div>
      <p class="title_content">{{goodsrate.content}}</p>
      <div class="getLocalTime">
        <span>{{ goodsrate.created | getLocalTime }}</span>
        <span>{{goodsrate.style}}</span>
      </div>
      <div class="image_contenediv" v-if="goodsrate.images">
        <div class="image_contene" v-for="(items,index) in goodsrate.images" :key="index">
          <img :src="items" alt>
        </div>
      </div>
    </div>
    <!-- 详情-->
    <div v-if="goodsskuinfo.skus" ref="skus">
      <div class="goodsrateMore">
        <span>商品详情</span>
      </div>
      <div class="tuijian_title">{{goodsskuinfo.title}}</div>
      <div class="tuijian">
        <div class="tuijianinfo" v-for="(items,index) in goodsskuinfo.skus" :key="index">
          <img :src="items.img" alt @load="detailimgload">
          <span class="highNowPrice">{{items.currency}}{{items.nowprice | twofiexd}}</span>
          <span class="oldPrice">{{items.currency}}{{items.price | twofiexd}}</span>
          <p class="tuijiantext">尺码：{{items.size}} &nbsp;&nbsp; 颜色：{{items.style}}</p>
        </div>
      </div>
    </div>
    <!-- 推荐 -->
    <div v-if="recommoned" ref="recommonedoffsetTop">
      <div class="goodsrateMore">
        <span>商品推荐</span>
      </div>
      <div class="tuijian">
        <div class="tuijianinfo" v-for="(items,index) in recommoned" :key="index">
          <img :src="items.image" alt>
          <p class="Recommond_title">{{items.title}}</p>
          <span class="highNowPrice">{{items.discountPrice}}</span>
          <span class="oldPrice">{{items.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { getrecommend } from "@/network/detail";

export default {
  name: "shopInfo",
  props: {
    shopdatainfo: {
      type: Object,
      default() {
        return {};
      }
    },
    detailImage: {
      type: Object,
      default() {
        return {};
      }
    },
    datasparams: {
      type: Object,
      default() {
        return {};
      }
    },
    goodsrate: {
      type: Object,
      default() {
        return {};
      }
    },
    goodsskuinfo: {
      type: Object
    }
  },
  data() {
    return {
      iid: null,
      rule: [],
      skuInfo: [],
      recommoned: [],
      goodsoffsetTop: 0,
      ruleoffsetTop: 0,
      skusoffsetTop: 0,
      recommonedoffsetTop: 0
    };
  },
  filters: {
    isBetter: function(value) {
      return value ? "高" : "低";
    },
    fiexd(vale) {
      return (vale / 10000).toFixed(1);
    },
    getLocalTime: function(nS) {
      return new Date(parseInt(nS) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    },
    twofiexd(vale) {
      return (vale / 100).toFixed(2);
    }
  },
  created() {
    getrecommend().then(res => {
      console.log(res.data.list);
      this.recommoned = res.data.list;
    });
  },
  mounted() {
    let datasparams = this.datasparams;
    if (datasparams.rules && datasparams.rule.length > 0) {
      this.rule = datasparams.rule[0];
    }
  },
  methods: {
    // 获取标题高度
    detailimgload() {
      if (this.goodsoffsetTop == 0) {
        this.goodsoffsetTop = this.$refs.goodsoffsetTop.offsetTop;
        this.ruleoffsetTop = this.$refs.ruleoffsetTop.offsetTop;
        this.skus = this.$refs.skus.offsetTop;
        this.recommonedoffsetTop = this.$refs.recommonedoffsetTop.offsetTop;
      }
    }
  }
};
</script>
<style  scoped>
.img_content {
  width: 60px;
  height: 60px;
  padding-top: 10px;
  padding-left: 10px;
}
.img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.name_content {
  position: relative;
  left: 83px;
  bottom: 40px;
  font-size: 16px;
  font-weight: 600;
  color: gray;
}
.infoconten {
  display: flex;
  justify-content: space-around;
  line-height: 25px;
}
h3,
h4 {
  margin: 5px;
  text-align: center;
}
.score {
  display: inline-block;
  width: 25px;
  text-align: left;
}
.isBettercativ {
  color: white;
  background-color: green;
}
.isBettercativbg {
  color: white;
  background-color: red;
}
.button {
  padding: 6px 60px;
  background-color: darkgray;
  opacity: 0.3;
  border-radius: 10px;
}
.button_conten {
  display: flex;
  justify-content: center;
  padding: 15px 10px 20px 15px;
}
.keytitle {
  text-align: left;
  padding: 10px 15px;
  font-size: 16px;
}
.img_cont {
  max-height: 360px;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
}
.img_cont img {
  /* height: 550px; */
  width: 100%;
}
.tableone {
  padding-left: 10px;
  width: 100px;
  color: black;
  font-size: 18px;
  font-weight: 600;
}
table {
  margin-top: 10px;
  width: 100%;
  line-height: 45px;
  padding: 15px 45px 5px 10px;
  font-size: 15px;
  border-collapse: collapse;
}
tr,
td {
  border-bottom: 1px solid gray;
}
.table_bottom {
  box-shadow: 0 10px 0 0 rgba(225, 225, 225, 0.5);
}
.Textcolor {
  color: #f13e3a;
}
.titleimg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.title {
  padding: 10px;
  display: flex;
  align-items: center;
}
.title_content {
  padding: 0px 10px;
  color: black;
  font-size: 18px;
  margin: 0px 0px 10px 0px;
}
.getLocalTime {
  padding: 0px 10px;
  color: gray;
}
.goodsrateMore_div {
  margin-top: 10px;
}
.goodsrateMore {
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid rgba(58, 57, 57, 0.8);
}
.titleMore {
  font-size: 14px;
  font-weight: 600;
}
.image_contenediv {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.image_contene {
  width: calc(50% - 10px);
  height: 100px;
}
.image_contene img {
  width: 100%;
  height: 100%;
}
.tuijian {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 10px;
  box-shadow: 0px 10px 0px 0px rgba(85, 85, 85, 0.3);
}
.tuijianinfo {
  width: calc(50% - 10px);
  height: 250px;
}
.tuijianinfo img {
  width: 100%;
  height: calc(100% - 50px);
}
.tuijian_title {
  padding: 15px 10px;
  text-indent: 30px;
  font-weight: 600;
  font-size: 18px;
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
.tuijiantext {
  margin: 0px;
  padding-left: 10px;
  font-size: 12px;
  color: gray;
}
.tuijian:last-child {
  justify-content: start;
}
.Recommond_title {
  text-indent: 17px;
  font-size: 14px;
  display: block;
  font-weight: 600;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0px;
}
</style>