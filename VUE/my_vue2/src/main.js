import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "@/routes";
import VueResource from 'vue-resource'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Vue.http.options.root = 'https://myhm-fcbd9.firebaseio.com/';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
