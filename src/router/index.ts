import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import Characters from '../views/Characters.vue'
import Locations from '../views/Locations.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    meta: { layout: 'main' },
    component: Dashboard,
  },
  {
    path: '/characters',
    name: 'Characters',
    meta: { layout: 'main' },
    component: () => import('../views/Characters.vue'),
  },
  {
    path: '/charecter/:id',
    name: 'CharacterPage',
    meta: { layout: 'main' },
    component: () => import('../views/details/CharecterPage.vue'),
  },
  {
    path: '/locations',
    name: 'Locations',
    meta: { layout: 'main' },
    component: () => import('../views/Locations.vue'),
  },
  {
    path: '/location/:id',
    name: 'LocationPage',
    meta: { layout: 'main' },
    component: () => import('../views/details/LocationPage.vue'),
  },
  {
    path: '/episods',
    name: 'Episods',
    meta: { layout: 'main' },
    component: () => import('../views/Episods.vue'),
  },
  {
    path: '/episode/:id',
    name: 'EpisodePage',
    meta: { layout: 'main' },
    component: () => import('../views/details/EpisodePage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'empty' },
    component: () => import('../views/RegisterPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
