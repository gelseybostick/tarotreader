import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
import ReadingView from '../views/ReadingView.vue'
import CardDetailsView from '../views/CardDetailsView.vue'
import ReadingSingleView from '../views/ReadingSingleView.vue'
import ReadingThreeView from '../views/ReadingThreeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardsView,
    },
    {
      path: '/reading',
      name: 'reading',
      component: ReadingView,
    },
    {
      path: '/card/:id', 
      name: 'card-details',
      component: CardDetailsView,
      props: true,
    },
    {
      path: '/reading/single',
      name: 'reading-single',
      component: ReadingSingleView,
    },
    {
      path: '/reading/three',
      name: 'reading-three',
      component: ReadingThreeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
