<template>
  <div class="keywordsdate">
      <span>本周流行</span>
      <img src="~assets/home/featureimg.png" alt="">
  </div>
</template>

<script>
export default {
  name: "KeyWords",
  props: {
    keywordsdate: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style  scoped>
.keywordsdate{
    margin-top: 20px;
    text-align: center;
}
.keywordsdate img{
    width: 100%;
    height: 200px;
}
</style>