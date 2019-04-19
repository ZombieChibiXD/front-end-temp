import '@babel/polyfill'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'

import Swal from 'vue-sweetalert2'
Vue.use(Swal)

import Toasted from 'vue-toasted';

// Vue.use(Toasted)

// you can also pass options, check options reference below
Vue.use(Toasted, {
  router
})



import EventBus from './_helpers/EventBus'
// EventBus Object
Vue.prototype.$bus = EventBus
// import vuex from 'vuex'
// Vue.use(vuex)

import Axios from "@/_services/axios.service"
Vue.prototype.$http = Axios
// Vue.use(Axios)

// import { store } from './_store';
import { router } from './_helpers'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebookF)
library.add(faTwitter)
library.add(faGooglePlusG)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// import UserCred from "@/_services/user.service";
// Vue.prototype.$cred = UserCred;




Vue.config.productionTip = false



new Vue({
  router,
  // store,
  render: h => h(App),
  
}).$mount('#app');
