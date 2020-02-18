<template>
  <!-- 注意只能有一層div，所以要包起來 -->
  <div>
    <h1>William</h1>
    <div>
      <!-- 
      <router-link to="/william/info">Info</router-link>|
      <router-link to="/william/youtube">Youtube</router-link> 
      改用綁定
      -->
      <router-link :to="{name:'william-info'}">Info</router-link>|
      <router-link :to="{name:'william-youtube'}">Youtube</router-link> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>