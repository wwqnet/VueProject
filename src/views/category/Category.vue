<template>
  <div>
    <nav-bar class="category">
      <div slot="left"><i class="el-icon-arrow-left"></i></div>
      <div slot="center">分类</div>
    </nav-bar>
    <category-content/>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import CategoryContent from "@/views/category/CategoryContent";


export default {
  name: "Category",
  components: {
    NavBar,
    CategoryContent
  }
};
</script>
<style scoped>
.category{
    background-color:slategray;
    text-align: center;
    color: white;
    position: sticky;
    top: 0;
    z-index: 999;
}
</style>