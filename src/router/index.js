import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sketchbook',
      name: 'sketchbook',
      component: () => import('../views/SketchbookView.vue')
    },
    {
      path: '/digital',
      name: 'digital',
      component: () => import('../views/DigitalView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/image/:id',
      name: 'image',
      component: () => import('../views/ImageView.vue'),
      props: true
    }
  ]
})

export default router;
