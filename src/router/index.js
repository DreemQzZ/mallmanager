import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: Login
  }]
})
