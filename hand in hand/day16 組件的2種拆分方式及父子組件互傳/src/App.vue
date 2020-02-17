<template>
  <div id="app">
    <!-- 也可以從export的data()傳遞 -->
    <!-- <Title title="Welcome to Your Vue.js App"/> -->
    <TitleComponent :title="title" /> 
    <!-- 傳到index.vue  資料都控制在App.vue-->
    <!-- <InputComponent :text="title" @textchange="changeHandler"/> -->
    <!-- 更簡單寫法，跟著用index.vue 換用update方式 -->
    <InputComponent :text.sync="title" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TitleComponent from './components/Title.vue'
import InputComponent from './components/InputComponent/index.vue'

export default {
  name: 'App',
  data(){
    return{
      title: 'Hello World Title',
      }
  },
  components: {
    HelloWorld,
    TitleComponent,
    InputComponent
  },
  methods: {
    changeHandler(val){
      this.title = val
    }
  }
}
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
</style>
