!function (root) {
  function $() {
    // 第一个
    console.log('i am No.1')
  }

  /**
   * 非冲突
   */
  $.noConflict = function () {
    root.$ = null
    return $
  }

  root.$ = $
}(global)

/**
 * 处理冲突
 */
// const jQuery = $.noConflict()

// function a() {
//   jQuery()
// }

function a() {
  $()
}


!function (root) {
  // 在库中存储全局环境中可能已经存在的与本库同名（为$）的库
  var _$ = root.$
  function $() {
    // 第二个
    console.log('i am No.2')
  }
  // 出让控制权方法
  $.noConflict = function(){
    // 如果当前全局环境中名为$的库和本库中定义的$是一致的
    // 那么就出让全局环境中$名给原先使用$名的库（现被暂存在_$中）
    if($ === root.$) {
      root.$ = _$
    }
    return $
  }
  root.$ = $
}(global)

// 不调用出让控制权语句的话，是后来者(No.2)居上，调用之后会将控制权交还给原先库(No.1)
// 当前对$有控制权的库(No.2)交出对$的控制权给之前一个库（No.1）
// $.noConflict()

a()