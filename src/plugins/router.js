import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutUs from '../components/AboutUs.vue'
import HomePage from '../components/HomePage.vue'
import bitcoinlive from '../components/bitcoinlive.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: HomePage
},
{
    path: '/about-us',
    component: AboutUs
},
{
    path: '/bitcoinLive',
    component: bitcoinlive
}
]



export default new VueRouter({
    mode: 'history',
    routes: routes
})

