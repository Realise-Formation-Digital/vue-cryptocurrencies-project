import Vue from 'vue'
import App from './App.vue'
import Beer from './components/Beer.vue'
import HelloAlicia from './components/HelloAlicia.vue'
import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/Home.vue'
import ​Vuetify ​from ​'@/plugins/vuetify' ​// path to vuetify export
 
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
  path: '/HelloAlicia',
  component: HelloAlicia
},
{
  path: '/HelloWorld',
  component: HelloWorld
},
]

const router = new VueRouter({
  mode: 'history', 
  routes: routePath // short for `routes: routes`
})

new Vue({
  router: router,
  render: h => h(App),
  Vuetify
}).$mount('#app')
