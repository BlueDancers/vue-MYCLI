import Vuex from 'vuex'
import Vue from 'vue';

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

// if (module.hot) {
//   module.hot.accept([
//     './state',
//     './mutations'
//   ], () => {
//     const newState = require('./state').default
//     const newMutations = require('./mutations').default
//     store.hotUpdate({
//       state: newState,
//       mutations: newMutations
//     })
//   })
// }

export default store
