import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../pages/MainPage.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('../pages/TablesPage.vue')
    },
    {
      path: '/tables/:id',
      name: 'table',
      component: () => import('../pages/TablePage.vue')
    }
  ]
})

export default router
