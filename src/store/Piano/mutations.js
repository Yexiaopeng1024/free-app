import * as types from './mutation-types'
export default{
  [types.SET_MODULE] (state, date) {
    state.module = date
  },
  [types.SET_NAME] (state, date) {
    state.name = date
  }
}
