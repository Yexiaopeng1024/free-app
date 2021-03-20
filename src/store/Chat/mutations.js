import {RECEIVE_MSG} from './mutation-types'
export default{
  [RECEIVE_MSG] (state, data) {
    state.backmsg = data
  }
}
