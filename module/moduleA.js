/**
 * 用module.exports接口去暴露
 */
module.exports = {
    sayHi: hi,
    sayHello: hello
}

var util = require('util')

function hi(name) {
    console.log(util.format('Hi~ %s', name))
}

function hello(name) {
    console.log(util.format('Hello, %s', name))
}
