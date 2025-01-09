import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Use the saved scroll position for back/forward navigation.
    } else {
      return { top: 0 }; // Scroll to the top for other navigations.
    }
  },
  routes: [
    {
      path: '/',
      name: 'sketchbook',
      component: () => import('../views/SketchbookView.vue')
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
      path: '/sayhi',
      name: 'sayhi',
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
