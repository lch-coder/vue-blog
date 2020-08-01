import Vue from 'vue'
import Router from 'vue-router'
const article = () => import('@/views/article/articles')
const articleDetail = () => import('@/views/article/articleDetail')
// const addArticle = () => import('@/views/newArticle')
const index = () => import('@/views/index')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            redirect: '/index/article/list',
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
                    ],
                },

                // {
                //     path: 'addArticle',
                //     name: 'addArticle',
                //     component: addArticle,
                // },
            ],
        },
    ],
})
