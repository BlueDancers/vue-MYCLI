import Vue from 'vue'
import App from './app.vue'
import router from './config/router/router'

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
