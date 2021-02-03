import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< Updated upstream

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
=======
import Cryptocurrency from '../components/Cryptocurrency.vue'
import PresentationCcs from '../components/PresentationCcs.vue'
import bitcoinlive from '../components/bitcoinlive.vue'
import carossel from '../components/carossel.vue'


Vue.use(VueRouter) // Utilise le router

const routes = [{
    path: '/',
    component: PresentationCcs
},
{
    path: '/Cryptocurrency',
    component: Cryptocurrency
>>>>>>> Stashed changes
},
{
    path: '/bitcoinLive',
    component: bitcoinlive
<<<<<<< Updated upstream
=======
},      

{
    path: '/carossel',
    component: carossel
>>>>>>> Stashed changes
}
]



export default new VueRouter({
    mode: 'history',
    routes: routes
})

