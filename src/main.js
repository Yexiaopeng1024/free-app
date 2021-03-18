import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Switch} from 'element-ui'
import 'jquery'

import '@/common/font/font.css'

Vue.use(Switch)
/* eslint-disable no-new */new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
