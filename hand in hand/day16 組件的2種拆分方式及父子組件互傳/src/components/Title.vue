<template>
<!-- 資料從下面的title取得，原始資料由App.vue  <Title title="Welcome to Your Vue.js App"/> 丟來 -->
  <h1 class="title">{{title}}</h1>
</template>

<script>
export default {
    name: 'TitleComponent',
    //這裡接App.vue丟來的資料
    props: {
        //你要給我一個title，類型是字串，需要 true
        title: {
            type : String,
            require: true,
        }
    }
}
</script>

<style scoped>
    h1.title {
        color:greenyellow;
    }
</style>