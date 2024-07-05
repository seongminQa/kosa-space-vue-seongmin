import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/router/Home'
import Trainee from '@/router/Trainee'
import Admin from '@/router/Admin'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  ...Home,
  ...Trainee,
  ...Admin
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 라우터 가드 확인해보기 ( https://v3.router.vuejs.org/kr/guide/advanced/navigation-guards.html )
  // 라우터 가드 영조씨 ( https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/ )
})

export default router
