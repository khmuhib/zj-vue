import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/couture',
      name: 'couture',
      component: () => import('../views/CoutureView.vue')
    },
    {
      path: '/alchemy',
      name: 'alchemy',
      component: () => import('../views/AlchemyView.vue')
    },
    {
      path: '/atelier',
      name: 'atelier',
      component: () => import('../views/AtelierView.vue')
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import('../views/AppointmentView.vue')
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue')
    },
  ]
})

export default router
