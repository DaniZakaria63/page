import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vuex);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
