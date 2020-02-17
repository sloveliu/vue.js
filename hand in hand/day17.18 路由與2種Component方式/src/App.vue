<template>
  <div id="app">
    <div id="nav">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- router-link用來切router -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/william">William</router-link>
    <!-- vue 提供的class 
    router-link-exact-active 現在這頁
    router-link-active 路由過程 / 是home 一定會經過 about是路由，所以不太會用exact -->
  </div>
  <!-- router-view component會顯示在這 -->
  <router-view/>
  </div>
  
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: orange;
}
  
.router-link-active{
  color: red;
}
</style>
