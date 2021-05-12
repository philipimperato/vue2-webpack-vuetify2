import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { VueExtendLayout, layout } from 'vue-extend-layout'

// styles / scss
import '@/assets/styles.css'

// plugins
import './plugins/dayjs'
import './plugins/filters'

// store
import store from './store'

// router
import router from './router'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)
store.dispatch('auth/authenticate')
  .catch((error) => {
    console.error(error)
    window.localStorage.removeItem('feathers-jwt')
  })
  .then(async (response) => {
    new Vue({
      vuetify,
      store,

      ...layout,

      router,
      render: h => h(App)
    }).$mount('#app')
  })
