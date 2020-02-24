<template>
  <!-- 通过ref绑定在普通的元素中 获取的就是对应的元素 绑定在组件中获取的就是对应的组件 通过$.ref.绑定的名称 获取 -->
  <div class="scrollSwirp" ref="scrollSwirp">
    <div class="scrollcontent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入第三方组件 Bscroll
import Bscroll from "better-scroll";

export default {
  name: "betterScroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
      message: "betterScroll信息"
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.scrollSwirp, {
      probeType: this.probeType, //设置时时监听是否滚动
      click: true,
      mouseWheel: true,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    // 监听上拉加载事件
    this.scroll.on("pullingUp", () => {
      this.$emit("homepullingUp");
    });
  },
  methods: {
    scrollTo(X, Y, time) {
      this.scroll.scrollTo(X, Y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh()
    },
    scrolly(){
      return this.scroll.y
    }
  }
};
</script>
<style  scoped>
</style>