import { createRouter, createWebHistory } from 'vue-router'
// import LoginView from '@/views/Home/Login.vue'
import Home from './Home'
import Admin from './Admin'
import Trainee from './Trainee'

/* 
처음 나오는 화면 url이 '/'와 같은 경우는 항상(또는 자주) 쓰이는 페이지이기 때문에
위에서 import하여 사용하는 것이 효율적
*/

const routes = [
  ...Home,
  ...Admin,
  ...Trainee
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
