<template>
  <div>
     <h5>{{$store.state.count}}</h5>
  </div>
</template>

<script>
export default {
  name:"Test",
  data () {
    return {
      message:"我是test组件"
    };
  },

}

</script>
<style  scoped>
</style>