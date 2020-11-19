import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(vueRouter);
const router = new vueRouter({
  routes: [
    {
      name: 'home', path: '/home', component: null
    }
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
