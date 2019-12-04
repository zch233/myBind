const myBind = function(...args) {
  const fn = this
  return function newFn(...newArgs) {
    fn.call(this, ...args, ...newArgs)
  }
}

Function.prototype.myBind = myBind

module.exports = myBind