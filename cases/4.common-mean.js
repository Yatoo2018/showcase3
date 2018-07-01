const fs = require('fs')
const path = require('path')


// 666 都没想过把这个实现以下。。。。
function runner(file) {
  const code = fs.readFileSync(path.join(__dirname, file), 'utf-8')
  const module = { exports: {} }
  const fn = new Function('module', 'exports', code)
  fn(module, module.exports)
  return module.exports
}

// require方法的替代品runner
const fail = runner('./module/export-fail.js')
console.log(fail)
fail()
console.log(fail.word)

/**
 * fn 到底生成了怎样的函数？
 * 这时候看出来为什么了吗？
 */
function _fn(module, exports) {
  // 这个作用域就是export-fail.js的顶级作用域
  exports.word = 'hello'
  module.exports = function () {
    console.log(exports.word)
  }
}
