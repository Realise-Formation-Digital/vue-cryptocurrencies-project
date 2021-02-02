import Vue from 'vue';
import App from './App.vue';
import Aboutus from './Aboutus.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

new Vue({
  render: h => h(Aboutus),
}).$mount('#Aboutus');

new Vue({ el: '#components-form' })
