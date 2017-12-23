/**
 * 直接给exports添加属性
 */
var util = require('util')

function hi(name) {
    console.log(util.format('Hi~ %s', name))
}
exports.sayHi = hi

function hello(name) {
    console.log(util.format('Hello, %s', name))
}
exports.sayHello = hello