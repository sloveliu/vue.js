<template>
  <div id="app">
    <!-- <HeaderView msg="父組件傳遞值到子組件"></HeaderView> -->
    <HeaderView :msg="title"></HeaderView>
    <img src="./assets/logo.png" />
    <!-- 這個就是組件對應下面的註冊 -->
    <!-- <HelloWorld/> -->

<!-- 這裡要綁定List的事件 -->
    <ListView @myMsg="getData"></ListView>
  </div>
</template>

<script>
//導入HelloWorld組件，進入HelloWorld查看一下，HTML什麼的都寫在那裡面
// import HelloWorld from './components/HelloWorld'
//導入組件
import ListView from './components/List';
import HeaderView from './components/Header';
// App.vue 是父組件，ListView是子組件  組件間通訊
// 父組件 --> 子組件  props
// 子主件 --> 父組件  自定義事件

export default {
  name: 'App',
  components: {
    //註冊組件 就可以在上面使用
    // HelloWorld
    ListView,
    HeaderView
  },
  data() {
    return {
      title: 'vue學習入門'
    };
  },
  methods: {
    getData(msg){
      console.log('App.vue組件：'+ msg);
      this.title = msg;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
