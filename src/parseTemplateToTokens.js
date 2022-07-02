import Scanner from './Scanner'
import nestTokens from './nestTokens'

// 该函数的作用是将模板字符串转换为tokens数组
export default function (templateStr) {
  let tokens = []
  // 实例化Scanner，用来扫描模板字符串
  let scanner = new Scanner(templateStr)
  let word
  while (scanner.pos !== templateStr.length) {
    // 将scanUtil方法返回的结果存入tokens数组中
    word = scanner.scanUtil('{{')
    if (word) {
      // 此处返回的一定是{{}}外的文本
      tokens.push(['text', word.trim()])
    }
    scanner.scan('{{')
    word = scanner.scanUtil('}}')
    if (word) {
      // 此处返回的一定是{{}}内的文本
      if (word[0] == '#' || word[0] == '/') tokens.push([word[0], word.substring(1)])
      else tokens.push(['name', word])
    }
    scanner.scan('}}')
  }
  // 得到的tokens是一个一维tokens数组，还需要对多层结构进行处理
  // nestTokens函数用于将一维tokens数组转换为多维tokens数组
  return nestTokens(tokens)
}
