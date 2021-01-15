import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Main from '../views/main/Main.vue'
import HistoryFaultAll from '../views/table/HistoryFaultAll.vue'
import TimeScope from '../views/table/TimeScope.vue'
export default createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [{
    path: "/",
    name: "index",
    component: Main,
    // redirect:'/history_fault',
    children: [{
      path: "history_fault",
      name: "history_fault",
      component: HistoryFaultAll
    }, {
      path: "time_scope",
      name: "time_scope",
      component: TimeScope
    }]
  }]
})