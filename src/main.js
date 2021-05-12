import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api'

// styles / scss
import '@/assets/styles.css'
import '@/assets/vuetify-overrides.css'

// plugins
import './plugins/dayjs'
import './plugins/filters'

// store
import store from './store'

// router
import router from './router'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

store.dispatch('auth/authenticate')
  .catch((error) => {
    console.error(error)
    window.localStorage.removeItem('feathers-jwt')
  })
  .then(async (response) => {
    new Vue({
      vuetify,
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  })
