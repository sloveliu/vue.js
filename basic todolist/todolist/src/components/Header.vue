<template>
  <div class="headerview">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '我是標題部分'
    };
  },
  //父組件給子組件傳遞數據 props
  //添加props
  props: {
    msg: {
      //自定義屬性 data當中的選項
      type: String,
      default: '我是誰？'
    }
  }
};
</script>

<style>
</style>