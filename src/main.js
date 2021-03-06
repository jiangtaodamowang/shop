import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSwiper from 'vue-awesome-swiper'
import './assets/js/flexble'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/css/swiper.css'
import './assets/css/font_icon/iconfont.css'

fastClick.attach(document.body);

Vue.use(vueSwiper)
Vue.use(VueLazyload,{
  loading: require('./assets/img/loadingGif.jpg')
})
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
