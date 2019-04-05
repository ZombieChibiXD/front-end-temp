import '@babel/polyfill'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'




// import { store } from './_store';
import { router } from './_helpers';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faFacebookF)
library.add(faTwitter)
library.add(faGooglePlusG)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
