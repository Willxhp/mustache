// Scanner类的作用是扫描接收到的模板字符串，并将模板字符串按照'{{}}'进行分段提取
export default class Scanner {
  constructor(templateStr) {
    // 头部指针
    this.pos = 0
    // 以头部指针为开头的字符串
    this.tail = templateStr
    this.templateStr = templateStr
  }
  // scan方法用于跳过指定的标记
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      this.pos += tag.length
      // 跳过指定的标记
      this.tail = this.templateStr.substring(this.pos)
    }
  }
  // scanUtil方法让指针遍历模板字符串，直到指定的标记为止，并返回之前遍历过的文字
  scanUtil(stopTag) {
    // 记录开始时指针的初始位置
    let pos_backUp = this.pos
    // 循环扫描字符串，直到this.tail的头部为指定的标记
    while (this.pos < this.templateStr.length && this.tail.indexOf(stopTag) !== 0) {
      this.pos++
      this.tail = this.templateStr.substring(this.pos)
    }
    // 将扫描过的字符串内容返回，实现字符串的分隔
    return this.templateStr.substring(pos_backUp, this.pos)
  }
}
