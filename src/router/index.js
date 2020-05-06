import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const article = () => import('@/views/articles')
const index = () => import('@/views/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/index/article',
      children: [
        {
          path: 'article',
          name: 'article',
          component: article
        }
      ]
    }
  ]
})
