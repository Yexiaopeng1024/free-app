import Vue from 'vue'

// Vue.filter('no-space', (string) => { // v-html无法使用过滤器
//   console.log(string)
//   const reg = /{br}/g
//   const newStr = string.replace(reg, '<br>')
//   return newStr
// })
Vue.prototype._no_space = (string) => { // v-html无法使用过滤器 将过滤方法注册成全局函数
  const reg = /{br}/g
  const reg2 = /{.*}/g // 去掉一些无法解析的表情符号
  const reg3 = /菲菲/g // 这是原AI的名称，这波操作叫做秽土转生
  let newStr = string.replace(reg, '<br>')
  newStr = newStr.replace(reg2, '')
  newStr = newStr.replace(reg3, '"小沙雕"')
  return newStr
}
