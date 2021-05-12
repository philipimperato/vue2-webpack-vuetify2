import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes/index.js'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

console.log(routes)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: 'login'
  }]
    .concat(routes)
    .concat([{
      path: '/:catchAll(.*)',
      component: NotFoundComponent,
      name: 'NotFound'
    }])
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      const user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin === 1) {
          next()
        } else {
          next({ name: 'userboard' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.public)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({ name: '/dashboard' })
    }
  } else {
    next()
  }
})

export default router
