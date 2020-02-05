import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/lib/parse";

import VueStash from 'vue-stash';
import store from './store';
Vue.use(VueStash)
Vue.config.productionTip = false

new Vue({
  router,
  data: { store },
  render: h => h(App)
}).$mount('#app')
