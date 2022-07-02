import parseTemplateToTokens from './parseTemplateToTokens.js'
import renderTemplate from './renderTemplate'

// 向window上挂载一个全局对象，利用该对象的render方法，可以将模板字符串和数据转换成可以上树的DOM字符串
window._templateEngine = {
  render(templateStr, data) {
    // 全部过程共分为两大步
    // . 将模板字符串转换成tokens数组
    const tokens = parseTemplateToTokens(templateStr)
    // 2. 根据生成的tokens和数据data生成DOM字符串
    const domStr = renderTemplate(tokens, data)
    return domStr
  },
}

// 以下为测试代码
/* const templateStr = `
  <div class="box">
    {{#student}}
    <div>{{name}}，{{age}}</div>
    <ul>
      {{#hobbies}}
      <li>{{.}}</li>
      {{/hobbies}}
    </ul>
    {{/student}}
  </div>
`
const data = {
  student: [
    {name: 'xhp', age:20, hobbies: ['足球']},
    {name: 'la', age: 30, hobbies: ['美女', '男人']}
  ],
}
const domStr = _templateEngine.render(templateStr, data)

let container = document.getElementById('container')
container.innerHTML = domStr */
