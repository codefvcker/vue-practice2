import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import infiniteScroll from 'vue-infinite-scroll'

import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
