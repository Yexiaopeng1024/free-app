import Vue from 'vue'
import VueRouter from 'vue-router'
import Piano from '../pages/Piano/Piano.vue'
import HappyChat from '../pages/Chat/HappyChat'
import Music from '../pages/Music/Music'
import Game from '../pages/Game/Game'
// 声明使用路由
Vue.use(VueRouter)
export default new VueRouter({
  routes: [{
    path: '/Piano',
    component: Piano
  },
  {
    path: '/HappyChat',
    component: HappyChat
  },
  {
    path: '/SadMusic',
    component: Music
  },
  {
    path: '/Game',
    component: Game
  }
  ]
})
