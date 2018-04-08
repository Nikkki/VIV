import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import Vuetify from 'vuetify';


import 'vuetify/dist/vuetify.min.css'; 
Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
