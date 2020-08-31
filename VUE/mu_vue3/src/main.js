import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import {store} from "@/store/store";

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
