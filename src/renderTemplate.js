import lookup from './lookup'
import parseArray from './parseArray'

// 根据tokens数组和数据data生成可上树的DOM字符串
export default function (tokens, data) {
  let resultStr = ''
  // 对多维tokens数组进行遍历
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    if (token[0] == 'text') {
      resultStr += token[1]
    } else if (token[0] == 'name') {
      // 使用lookup函数防止出现{{}}中出现.符号
      resultStr += lookup(data, token[1])
    } else if (token[0] == '#') { // 嵌套数组的情况
      resultStr += parseArray(token, data)
    }
  }
  return resultStr
}
