import Vue from 'vue'
import Vuex from 'vuex'

import piano from './Piano'
import chat from './Chat'

import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    piano,
    chat
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
