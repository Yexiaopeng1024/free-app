import Vue from 'vue'
import VueRouter from 'vue-router'
import Piano from '../pages/Piano/Piano.vue'
// 声明使用路由
Vue.use(VueRouter)
export default new VueRouter({
  routes: [{
    path: '/Piano',
    component: Piano
  }]
})
