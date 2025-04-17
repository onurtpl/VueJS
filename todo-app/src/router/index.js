import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YapilacakEkleView from '../views/YapilacakEkleView.vue'
import YapilacakGuncelleView from '@/views/YapilacakGuncelleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/yapilacak-ekle',
    name: 'YapilacakEkle',
    component: YapilacakEkleView
  },
  {
    path: '/yapilacak-guncelle/:id',
    name: 'YapilacakGuncelle',
    component: YapilacakGuncelleView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
