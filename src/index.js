const myBind = function(...args) {
  const fn = this
  return function newFn(...newArgs) {
    return fn.call(...args, ...newArgs)
  }
}

Function.prototype.myBind = myBind

module.exports = myBind