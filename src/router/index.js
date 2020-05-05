import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const nav = () => import('@/components/nav')
const slider = () => import('@/components/slider')
const article = () => import('@/views/articles')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider
    }
  ]
})
