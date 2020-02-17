// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'  //導入組件node_module裡的vur
import App from './App' //導入當前目錄下的App.vue(.vue可以去掉)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({ //創建對象
  el: '#app',
  components: { App }, //組件必須先註冊後才能使用
  template: '<App/>'
})
