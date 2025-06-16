import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatOda from '@/views/ChatOda.vue'

import { auth } from '@/firebase/config'

const authCheck = (to, from, next) => { 
  const user = auth.currentUser
  if (user) {
    next() // User is authenticated, proceed to the route
  } else {
    next({ name: 'Home' }) // Redirect to Home if not authenticated
  }
}

const chatCheck = (to, from, next) => { 
  const user = auth.currentUser
  if (user) {
    next({name: 'ChatOdasi'}) // User is authenticated, proceed to the route
  } else {
    next() // Redirect to Home if not authenticated
  }
}



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: chatCheck
  },
  {
    path: '/chat',
    name: 'ChatOdasi',
    component: ChatOda,
    beforeEnter: authCheck
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
