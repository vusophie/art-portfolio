import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'traditional',
      component: () => import('../views/TraditionalView.vue')
    },
    {
      path: '/traditional',
      name: 'traditional',
      component: () => import('../views/TraditionalView.vue')
    },{
      path: '/animation',
      name: 'animation',
      component: () => import('../views/AnimationView.vue')
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
      path: '/image/:id',
      name: 'image',
      component: () => import('../views/ImageView.vue')
    }
    
  ]
})

export default router
