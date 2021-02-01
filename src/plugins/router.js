import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Beer from "@/components/Beer";
import HelloAlicia from "@/components/HelloAlicia";
import Crypto from "@/components/Crypto";

Vue.use(VueRouter)

const routePath = [
  {
    path: '/',
    component: Home
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
    path: '/Crypto',
    component: Crypto
  },
]

export default new VueRouter({
  mode: 'history',
  routes: routePath // short for `routes: routes`
})
