import Vue from 'vue'
import todolist from './todolist.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(todolist)
}).$mount('#app')
