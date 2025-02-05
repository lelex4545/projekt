import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'trix-editor',
];

new Vue({
  render: h => h(App),
}).$mount('#app')
