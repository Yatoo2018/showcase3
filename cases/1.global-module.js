/**
 * 最早的模块化其实并不算模块化
 */

!function (root) {

	var _$ = root.$
  function $() {
    // TODO
  }
  $.noConflict = function(){
		if($ === root.$) {
			root.$ = _$
		}
		return $
  }
  root.$ = $
}(global)

/**
 * 当时主要期望通过闭包，来解决全局变量污染的问题
 * 但实际上，我们的库依然会占用全局变量
 * 那么如果用一个库跟你使用的是同一个变量名咋办呢？
 */