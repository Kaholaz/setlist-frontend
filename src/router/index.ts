import { createRouter, createWebHistory } from 'vue-router'
import DisplaySetListView from '@/views/DisplaySetListView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:setList',
      name: 'displayList',
      component: DisplaySetListView,
    },
    {
      path: '/:setList/settings',
      name: 'editList',
      component: () => import('@/views/EditSetListView.vue'),
    },
    {
      path: '/new',
      name: 'newList',
      component: () => import('@/views/NewSetListView.vue'),
    },
    {
      path: '/not-found',
      name: '404',
      component: () => import('@/views/NotFoundView.vue'),
    }
  ]
})

export default router
