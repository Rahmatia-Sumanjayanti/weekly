import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Section1View from '../views/Section1View.vue'
import Section2View from '../views/Section2View.vue'
import Section3View from '../views/Section3View.vue'
import Section4View from '../views/Section4View.vue'
import Section5View from '../views/Section5View.vue'
import Section6View from '../views/Section6View.vue'
import Section7View from '../views/Section7View.vue'
import Section8View from '../views/Section8View.vue'
import Section9View from '../views/Section9View.vue'
import Section10View from '../views/Section10View.vue'
import Section11View from '../views/Section11View.vue'
import Section12View from '../views/Section12View.vue'
import Section13View from '../views/Section13View.vue'
import Section14View from '../views/Section14View.vue'
import Section15View from '../views/Section15View.vue'
import Section16View from '../views/Section16View.vue'
import Section17View from '../views/Section17View.vue'
import Section18View from '../views/Section18View.vue'
import Section19View from '../views/Section19View.vue'
import Section20View from '../views/Section20View.vue'
import Section21View from '../views/Section21View.vue'
import Section22View from '../views/Section22View.vue'
import Section23View from '../views/Section23View.vue'
import Section24View from '../views/Section24View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/section1',
    name: 'Section1',
    component: Section1View
  },
  {
    path: '/section2',
    name: 'Section2',
    component: Section2View
  },
  {
    path: '/section3',
    name: 'Section3',
    component: Section3View
  },
  {
    path: '/section4',
    name: 'Section4',
    component: Section4View
  },
  {
    path: '/section5',
    name: 'Section5',
    component: Section5View
  },
  {
    path: '/section6',
    name: 'Section6',
    component: Section6View
  },
  {
    path: '/section7',
    name: 'Section7',
    component: Section7View
  },
  {
    path: '/section8',
    name: 'Section8',
    component: Section8View
  },
  {
    path: '/section9',
    name: 'Section9',
    component: Section9View
  },
  {
    path: '/section10',
    name: 'Section10',
    component: Section10View
  },
  {
    path: '/section11',
    name: 'Section11',
    component: Section11View
  },
  {
    path: '/section12',
    name: 'Section12',
    component: Section12View
  },
  {
    path: '/section13',
    name: 'Section13',
    component: Section13View
  },
  {
    path: '/section14',
    name: 'Section14',
    component: Section14View
  },
  {
    path: '/section15',
    name: 'Section15',
    component: Section15View
  },
  {
    path: '/section16',
    name: 'Section16',
    component: Section16View
  },
  {
    path: '/section17',
    name: 'Section17',
    component: Section17View
  },
  {
    path: '/section18',
    name: 'Section18',
    component: Section18View
  },
  {
    path: '/section19',
    name: 'Section19',
    component: Section19View
  },
  {
    path: '/section20',
    name: 'Section20',
    component: Section20View
  },
  {
    path: '/section21',
    name: 'Section21',
    component: Section21View
  },
  {
    path: '/section22',
    name: 'Section22',
    component: Section22View
  },
  {
    path: '/section23',
    name: 'Section23',
    component: Section23View
  },
  {
    path: '/section24',
    name: 'Section24',
    component: Section24View
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
