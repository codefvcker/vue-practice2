import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import Calendar from '../views/Calendar.vue'
import Targets from '../views/Targets.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    meta: { layout: 'main' },
    component: Dashboard,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    meta: { layout: 'main' },
    component: () => import('../views/Calendar.vue'),
  },
  {
    path: '/targets',
    name: 'Targets',
    meta: { layout: 'main' },
    component: () => import('../views/Targets.vue'),
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
