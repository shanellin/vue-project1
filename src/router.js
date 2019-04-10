import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/About.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('./components/article.vue')
    }
  ]
})
