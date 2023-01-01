import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import route from './routers'
import store from './store'



Vue.use(VueRouter);

const router = new VueRouter({
  routes: route,
  store: store,
  mode: 'history'
  
})
// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem("currentUser") == "logged out") 
//   next({ path: '/' })
//   else next()
// })
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && localStorage.getItem("currentUser") == "logged out") next({ name: 'Login' })
//   else next()
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
