<template>
  <div class="recommend">
    <div class="recomenditems" v-for="(item,index) in recommenddate" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt>
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommentView",
  props: {
    recommenddate: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      data: null
    };
  }
};
</script>
<style  scoped>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  box-shadow: 0px 7px 0px 0px rgba(52, 53, 52, 0.1);
}
.recommend a{
    color: black;
}
.recomenditems {
  padding: 5px;
  flex: 1;
}
.recomenditems img {
  width: 100%;
}
</style>