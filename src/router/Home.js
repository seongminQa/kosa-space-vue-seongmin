const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Login.vue'),
        redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/SignUp.vue')
    },
    {
      path: '/findid',
      name: 'findid',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/FindId.vue')
    },
    {
      path: '/findpassword',
      name: 'findpassword',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/FindPassword.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import(/* webpackChunkName: "admin" */ '@/views/Admin/MyPage/UpdateAdminView.vue')
    }
  ]

  export default routes;