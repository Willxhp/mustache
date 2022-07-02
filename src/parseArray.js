import lookup from './lookup'
import renderTemplate from './renderTemplate'

export default function (token, data) {
  // console.log(token, data)
  let resultStr = ''
  // 获取到嵌套的内层数组
  let newData = lookup(data, token[1])
  // 对数组进行遍历，每一项都作为数据与其嵌套的内部tokens进行解析
  for (let i = 0; i < newData.length; i++) {
    // { ...newData[i], '.': newData[i] }写法是为了兼顾每一项是基本数据类型，可以利用.符号获取数据
    resultStr += renderTemplate(token[2], { ...newData[i], '.': newData[i] })
  }
  return resultStr
}
