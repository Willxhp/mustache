// 在{{}}中可以使用.符号，但是类似a['b.c']的形式无法读取到a.b.c，所以使用lookup函数解决此问题
export default function (data, keyName) {
  if (keyName.includes('.') && keyName !== '.') {
    let temp = data
    let keys = keyName.split('.')
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]]
    }
    return temp
  }
  return data[keyName]
}
