import Vue from 'vue'
import App from './App.vue'
import Beer from './components/Beer.vue'
import HomePage from './components/Home.vue'
import BitcoinApi from './components/BitcoinApi.vue'

import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routePath = [{
  path: '/',
  component: HomePage
},
{
  path: '/Beer',
  component: Beer
},
{
  path: '/BitcoinApi',
  component: BitcoinApi
}

]

const router = new VueRouter({
  mode: 'history', 
  routes: routePath // short for `routes: routes`
})

new Vue({
  router: router,
  render: h => h(App),
  vuetify
}).$mount('#app')
