import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/traditional',
      name: 'traditional',
      component: () => import('../views/TraditionalView.vue')
    },
    {
      path: '/digital',
      name: 'digital',
      component: () => import('../views/DigitalView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/image/:id',
      name: 'image',
      component: () => import('../views/ImageView.vue')
    }
    
  ]
})

export default router
