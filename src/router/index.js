import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tree from '../views/Tree.vue'
import Tree2 from '../views/Tree2.vue'
import Tree3 from '../views/Tree3.vue'
import Tree4 from '../views/Tree4.vue'
import Tree5 from '../views/Tree5.vue'
import Tree6 from '../views/Tree6.vue'
import Tree7 from '../views/Tree7.vue'
import Tree8 from '../views/Tree8.vue'
import Tree9 from '../views/Tree9.vue'
import Tree10 from '../views/Tree10.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tree',
    name: 'Tree',
    component: Tree
  },
  {
    path: '/tree2',
    name: 'Tree2',
    component: Tree2
  },
  {
    path: '/tree3',
    name: 'Tree3',
    component: Tree3
  },
  {
    path: '/tree4',
    name: 'Tree4',
    component: Tree4
  },
  {
    path: '/tree5',
    name: 'Tree5',
    component: Tree5
  },
  {
    path: '/tree6',
    name: 'Tree6',
    component: Tree6
  },
  {
    path: '/tree7',
    name: 'Tree7',
    component: Tree7
  },
  {
    path: '/tree8',
    name: 'Tree8',
    component: Tree8
  },
  {
    path: '/tree9',
    name: 'Tree9',
    component: Tree9
  },
  {
    path: '/tree10',
    name: 'Tree10',
    component: Tree10
  },
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
