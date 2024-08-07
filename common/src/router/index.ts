/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../pages/ProducerList.vue")
    },
    {
      path: "/producer/:id",
      component: () => import("../pages/ProductList.vue")
    }
  ]
})

export default router
