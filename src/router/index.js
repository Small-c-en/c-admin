import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/Login/index.vue') },
    {
      path: '/layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        { path: '', component: () => import('@/views/Layout/children/UserInfo/index.vue') },
        {
          path: '/layout/area',
          component: () => import('@/views/Layout/children/components/UserAreaDistribute.vue')
        },
        {
          path: '/layout/hot',
          component: () => import('@/views/Layout/children/Hot/index.vue')
        },
        {
          path: '/layout/article',
          component: () => import('@/views/Layout/children/ArticleManage/index.vue')
        },
        {
          path: '/layout/private',
          component: () => import('@/views/Layout/children/private/index.vue')
        }
      ]
    }
  ]
})

export default router
