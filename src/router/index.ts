import { createRouter, createWebHistory } from 'vue-router'
import DisplaySetListView from '@/views/DisplaySetListView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Set list',
      component: DisplaySetListView,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/EditSetListView.vue'),
    }
  ]
})

export default router
