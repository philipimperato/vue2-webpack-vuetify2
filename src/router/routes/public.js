import Registration from '@/views/user/Register.vue'
import ForgotPassword from '@/views/user/ForgotPassword.vue'

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
    component: Registration
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: ForgotPassword
  }
]

export default routes.map(route => {
  const meta = {
    public: true,
    auth: false
  }
  return { ...route, meta }
})
