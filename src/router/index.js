import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/todo',
    component: () => import('../views/todo.vue')
  },{
    path: '/',
    component: () => import('../views/main/Main.vue')
  },{
    path: '/login',
    component: () => import('../views/login/Login.vue')
  }]
})