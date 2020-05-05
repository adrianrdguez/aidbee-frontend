import Vue from 'vue'
import VueRouter from 'vue-router'

// Views loaded
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import HelpShow from '../views/HelpShow.vue'
import HelpCreate from '../views/HelpCreate.vue'
import Mapa from '../views/Mapa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'simple' },
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { layout: 'simple' },
    component: Signup
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Signup'
        })
      }
      next()
    }
  },
  {
    path: '/helps/new',
    name: 'HelpCreate',
    component: HelpCreate,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Signup'
        })
      }
      next()
    }
  },
  {
    path: '/helps/:id',
    name: 'HelpShow',
    component: HelpShow,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Signup'
        })
      }
      next()
    }
  },
  {
    path: '/mapa',
    name: 'Mapa',
    meta: { layout: 'default' },
    component: Mapa,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Signup'
        })
      }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
