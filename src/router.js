import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// routes: [
//     { path: '/user/:id', component: User,
//       children: [
//         // UserHome will be rendered inside User's <router-view>
//         // when /user/:id is matched
//         { path: '', component: UserHome },
//
//         // UserProfile will be rendered inside User's <router-view>
//         // when /user/:id/profile is matched
//         { path: 'profile', component: UserProfile },
//
//         // UserPosts will be rendered inside User's <router-view>
//         // when /user/:id/posts is matched
//         { path: 'posts', component: UserPosts }
//       ]
//     }
//   ]
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/Home.vue'),
      children: [
      ]
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
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
