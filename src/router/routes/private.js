import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

export default routes.map(route => {
  const meta = {
    public: false,
    requiresAuth: true
  }
  return { ...route, meta }
})
