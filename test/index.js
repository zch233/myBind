const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const myBind = require('../src/index')

chai.use(sinonChai)

const assert = chai.assert

describe('myBind', () => {
  it('是一个函数', () => {
    assert.isFunction(myBind)
  })
  it('绑定在函数的原型上', () => {
    const fn = function() {
      return this.name
    }
    assert.isFunction(fn.myBind)
  })
  it('能正确绑定this', () => {
    const fn = function() {
      return this.name
    }
    const newFn = fn.myBind({ name: 'zch' })
    assert(newFn() === 'zch')
  })
  it('能接收参数', () => {
    const fn = function(a, b) {
      return this.name + a + b
    }
    const newFn = fn.myBind({ name: 'zch' }, '2333')
    assert(newFn('ha') === 'zch2333ha')
  })
})
