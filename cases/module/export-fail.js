console.log(this)
// 这个this对象在 3.common.js中是{}
// 这个this对象在 4.common.mean.js中好像是global
// 疑问点，需要求证！！！
exports.word = 'hello'
module.exports = function () {
	console.log(exports.word)
}
// 在node模块中, 顶级作用域是module.exports这个对象
//
// 而 exports 是 module.exports 的一个引用, 模块初始化时他们同时指向一个空对象{}
// 即可以这样描述他们之间的关系
// exports = module.exports = {}              (1)
// 即这俩个变量都指向这个空对象
//
// 而模块在导出时导出的是module.exports这个对象     (2)

// 请使用 case/7.node-module-export.js 自行验证结论(1)和(2）

// ====================================================

// 所以当 module.exports被用匿名函数重写后, module.exports指向了新的对象（这里是那个匿名函数）
// 而 exports 仍然引用初始化的那个对象，且对象上的所有属性都将丢失，无法导出
//
// 然而在当前模块内部 exports 上面的属性和模块内的this指向同一个对象，且是可访问的，
// 相当于   var word = 'hello' //模块内部私有变量
// 也等价于 this.word = 'hello' //this上面的属性
// 所以当我们运行这个模块的时候只能导出一个匿名函数，而这个匿名函数可以调用到模块内部的私有变量word,
// 而导出对象module.exports是不存在这个属性的

// 所以这个模块也可以这么写

// var word = 'hello'
// module.exports = function(){
//   console.log(word)
// }

//又或者

// var word = 'hello'
// exports = module.exports = function(){
//   console.log(word)
// }

// 但是不能这么写, 因为这么写只是重写了exports，断开了与初始化对象的关系重新指向了这个匿名函数
// 将导出的是指向初始化的对象{}的module.exports变量

// var word = 'hello'
// exports = function(){
//   console.log(word)
// }

