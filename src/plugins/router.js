import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import BitcoinApi from "@/components/BitcoinApi";
import FormulaireContact from "@/components/FormulaireContact";
// import Crypto from "@/components/Crypto";
import GoogleMap from "@/components/GoogleMap";
import Information from "@/components/Information";
import Apidecoinpaprika from "@/components/Apidecoinpaprika";
// import AboutUs from '@/components/AboutUs';
import HomePageKilian from "@/components/HomePageKilian";
import Bitcoinlive from "@/components/Bitcoinlive";
import Cryptocurrency from "@/components/Cryptocurrency";
import PresentationCcs from '@/components/PresentationCcs';



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
    path: '/GoogleMap',
    component: GoogleMap
  },
  {
    path: '/HomePageKilian',
    component: HomePageKilian
  },
  {
    path: '/Cryptocurrency',
    component: Cryptocurrency
  },
  {
    path: '/Bitcoinlive',
    component: Bitcoinlive
  },
  {
    path: '/PresentationCcs',
    component: PresentationCcs
  },
  {
    path: '/Information',
    component: Information
  },
  {
    path: '/Apidecoinpaprika',
    component: Apidecoinpaprika
  },
]

export default new VueRouter({
  mode: 'history',
  routes: routePath // short for `routes: routes`
})
