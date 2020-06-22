import Vue from 'vue'
import VueRouter from 'vue-router'

// Views loaded
import Home from '../views/Home.vue'
import Cover from '../views/Cover.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import HelpShow from '../views/HelpShow.vue'
import HelpCreate from '../views/HelpCreate.vue'
import Mapa from '../views/Mapa.vue'
import Requests from '../views/Requests.vue'
import Requester from '../views/Requester.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    redirect: { name: 'Cover' }
  },
  {
    path: '/cover',
    name: 'Cover',
    meta: { layout: 'simple' },
    component: Cover
  },
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
    path: '/maps',
    name: 'Mapa',
    meta: { layout: 'default' },
    component: Mapa,
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
    path: '/requests',
    name: 'Requests',
    meta: { layout: 'default' },
    component: Requests,
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
    path: '/myhelps',
    name: 'Requester',
    meta: { layout: 'default' },
    component: Requester,
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
    path: '/myprofile',
    name: 'Profile',
    meta: { layout: 'default' },
    component: Profile,
    beforeEnter (to, from, next) {
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
