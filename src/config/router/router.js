import Router from 'vue-router'
import Vue from 'vue';

import one from '../../component/one.vue'
import two from '../../component/two.vue'
import twos from '../../component/tows.vue'

Vue.use(Router)

const config = new Router({
  mode: 'history',
  routes: [
    {
      path: '/one',
      component: one,
      name: 'one'
    },
    {
      path: '/two',
      component: two,
      name: 'two',
      children: [
        {
          path: 'twos',
          component: twos,
          name: 'twos'
        }
      ]
    }
  ]
})

export default config
