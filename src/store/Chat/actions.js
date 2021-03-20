import {RECEIVE_MSG} from './mutation-types'
import {reqChat} from '../../api'
export default {
  async getMsg ({commit}, letgoMsg) {
    const result = await reqChat(letgoMsg)
    commit(RECEIVE_MSG, result)
  }
}
