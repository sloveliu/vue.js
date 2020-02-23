import Vue from 'vue'
import App from './App.vue'
//router加入以下
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
