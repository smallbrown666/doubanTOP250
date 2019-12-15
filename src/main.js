// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入axios  在npm中安装 cnpm install axios --save
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//注入axios
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
