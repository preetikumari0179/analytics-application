import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import GlobalComponents from './globalComponents/index';

Vue.config.productionTip = false;
Vue.use(GlobalComponents);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
