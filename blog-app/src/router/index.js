import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakaleEkle from '@/views/MakaleEkle.vue'
import MakaleDetay from '@/views/MakaleDetay.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/ekle',
    name: 'Ekle',
    component: MakaleEkle
  },
  {
    path: '/makale/:id',
    name: 'Detay',
    component: MakaleDetay,
    props: true
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
