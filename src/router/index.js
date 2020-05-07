import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const article = () => import('@/views/articles')
const articleDetail = () => import('@/views/articleDetail')
const addArticle = () => import('@/views/newArticle')
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
      path: '/a',
      name: 'addArticle',
      component: addArticle
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
        },
        {
          path: 'articleDetail',
          name: 'articleDetail',
          component: articleDetail
        },
        {
          path: '/addArticle',
          name: 'addArticle',
          component: addArticle
        }
      ]
    }
  ]
})
