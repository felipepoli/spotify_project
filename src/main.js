import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'
import VueAxios from 'vue-axios'


Vue.use(Vuex)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // vuex,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
