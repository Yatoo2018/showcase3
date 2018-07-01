/**
 * 文件名称: which-object-will-export-in-node-module.js
 * 创建时间: 2018/06/25 22:53
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */

// 验证 初始化为空对象
console.log(this) // {}
console.log(this === exports) // true
console.log(this === module.exports) // true


// 验证导出的为module.exports对象

var word = 'hello' // 这样声明的变量为模块内私有变量
exports.aaa = 'word' // 相当于给初始化对象添加属性 {aaa:'word'}

// 下面覆写这俩个特殊的变量
module.exports = function () {
	console.log(word)
}
exports = function(){
	console.log(2)
}

// 值得注意的是，覆写了 module.exports和exports之后 this仍然指向初始化的那个对象
console.log(this) // this没有被覆盖过所以这里仍然指向初始化对象
console.log(this === exports) // false 由于覆写后指向不是同一个对象了
console.log(this === module.exports) // false 由于覆写后指向不是同一个对象了
