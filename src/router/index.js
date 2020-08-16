import Vue from 'vue'
import Router from 'vue-router'
const article = () => import('@/views/article/articles')
const articleDetail = () => import('@/views/article/articleDetail')
const addArticle = () => import('@/views/article/newArticle')
const index = () => import('@/views/index')
const home = () => import('@/views/home')

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/index/article/list',
      children: [
        {
          path: 'article',
          name: 'article',
          redirect: '/index/article/list',
          component: {
            template: '<div><router-view></router-view></div>',
          },
          children: [
            {
              path: 'list',
              name: 'list',
              component: article,
            },
            {
              path: 'detail',
              name: 'detail',
              component: articleDetail,
            },
            {
              path: 'add',
              name: 'add',
              component: addArticle,
            },
          ],
        },
      ],
    },
  ],
})
