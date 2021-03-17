import Vue from 'vue'
import Vuex from 'vuex'

import piano from './Piano'

import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    piano
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
