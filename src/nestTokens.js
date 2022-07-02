export default function(tokens) {
  const nestTokens = []
  // collector指向当前正在操作的层次
  let collector = nestTokens
  // 用栈来记录操作过的层次
  let stack = []
  // 对一维tokens进行遍历
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch(token[0]) {
      // # 表示嵌套结构的开始
      case '#':
        stack.push(token)
        collector.push(token)
        // collector进入下一层
        collector = token[2] = []
        break
      // / 表示嵌套结构的结束
      case '/':
        stack.pop()
        // 出栈后collector回退一层
        if (stack.length !== 0) {
          collector = stack[stack.length - 1][2]
        } else {
          collector = nestTokens
        }
        break
      // 非嵌套结构直接存入nestTokens即可
      default:
        collector.push(token)
    }
  }
  return nestTokens
}