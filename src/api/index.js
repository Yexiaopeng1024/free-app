import ajax from './ajax'
// http://api.qingyunke.com/api.php     智能聊天API接口
const BASE_URL = '/chat'
// 发送消息给聊天API
export const reqChat = (msg) => ajax(BASE_URL, msg)
