<template>
  <div>
    <nav-bar class="category">
      <div slot="left">返回</div>
      <div slot="center">分类</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar
  }
};
</script>
<style scoped>
.category{
    background-color:slategray;
    text-align: center;
    color: white;
}
</style>