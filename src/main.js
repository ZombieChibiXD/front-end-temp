import '@babel/polyfill'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'

import Axios from "@/_services/axios.service"
Vue.prototype.$http = Axios
// Vue.use(Axios)

// import { store } from './_store';
import { router } from './_helpers'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import UserCred from "@/_services/user.service";
// Vue.prototype.$cred = UserCred;




library.add(faFacebookF)
library.add(faTwitter)
library.add(faGooglePlusG)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false



new Vue({
  router,
  // store,
  render: h => h(App),
  
}).$mount('#app');
