import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import TasksAll from '../views/tasks/TasksAll.vue'
import TasksCreate from '../views/tasks/TasksCreate.vue'
import TasksEdit from '../views/tasks/TasksEdit.vue'

const isLoggedIn = false;

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (toolbar, from, next) => {
      if (!isLoggedIn) {
        next();
      } else {
        next(`/`)
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (toolbar, from, next) => {
      if (!isLoggedIn) {
        next();
      } else {
        next(`/`)
      }
    }
  },
  {
    path: '/tasks',
    name: 'tasks-all',
    component: TasksAll,
    beforeEnter: (toolbar, from, next) => {
      if (isLoggedIn) {
        next();
      } else {
        next(`/login`)
      }
    }
  },
  {
    path: '/tasks/new',
    name: 'tasks-create',
    component: TasksCreate,
    beforeEnter: (toolbar, from, next) => {
      if (isLoggedIn) {
        next();
      } else {
        next(`/login`)
      }
    }
  },
  {
    path: '/tasks/edit',
    name: 'tasks-edit',
    component: TasksEdit,
    beforeEnter: (toolbar, from, next) => {
      if (isLoggedIn) {
        next();
      } else {
        next(`/login`)
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})


export default router
