import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import BitcoinApi from "@/components/BitcoinApi";
import FormulaireContact from "@/components/FormulaireContact";
import Crypto from "@/components/Crypto";
import GoogleMap from "@/components/GoogleMap";
import Information from "@/components/Information";
import Apidecoinpaprika from "@/components/Apidecoinpaprika";
import AboutUs from '@/components/AboutUs';

Vue.use(VueRouter)

const routePath = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/BitcoinApi',
    component: BitcoinApi
  },
  {
    path: '/Contact',
    component: FormulaireContact
  },
  {
    path: '/about-us',
    component: AboutUs
  },
  {
    path: '/Crypto',
    component: Crypto
  },
  {
    path: '/Information',
    component: Information
  },
  {
    path: '/Apidecoinpaprika',
    component: Apidecoinpaprika
  },
  {
    path: '/GoogleMap',
    component: GoogleMap
  },
]

export default new VueRouter({
  mode: 'history',
  routes: routePath // short for `routes: routes`
})
