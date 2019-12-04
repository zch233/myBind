const myBind = function(asThis, ...args) {
  const fn = this
  function newFn(...newArgs) {
    return fn.call(this instanceof newFn ? this : asThis, ...args, ...newArgs)
  }
  return newFn
}

Function.prototype.myBind = myBind

module.exports = myBind