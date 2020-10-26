import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import swiper from 'swiper'
// import '../src/assets/js/swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

// Vue.use(swiper)

import './assets/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/app.css'
// import VueRouter from 'vue-router'
// import $ from 'jquery'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
