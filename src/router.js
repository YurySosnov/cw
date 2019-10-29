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
      component: () => import('./views/Home.vue')
    },
    {
      path: '/dictation',
      name: 'dictation',
       component: () => import('./views/Dictation.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/Create.vue')
    },
  ]
})
