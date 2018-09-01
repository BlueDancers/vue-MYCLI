import Vue from 'vue'
import App from './app.vue'
import router from './config/router/router'
import store from './config/vuex/vuex';
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
