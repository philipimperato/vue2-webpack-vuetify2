const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue'),
    meta: {
      layout: 'empty'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import('@/views/user/ForgotPassword.vue')
  }
]

export default routes.map(route => {
  const meta = Object.assign(route.meta || {}, {
    public: true,
    auth: false
  })
  return { ...route, meta }
})
