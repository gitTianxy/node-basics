/**
 * 背景
 * 为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里. 在Node环境中，一个.js文件就称之为一个模块(module).
 * 
 * 模块分类
 * 1. Node内置/原生模块
 * 2. 第三方模块
 * 3. 自定义模块
 * 
 * CommonJS规范定义了nodeJS的模块加载机制
 * JavaScript是一种函数式编程语言，它支持闭包; 如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。
 * nodeJS加载模块文件时就是通过在模块内容外包装一层形成闭包, 然后把闭包内容保存为内置变量exports的属性来完成的.
 */

var moduleA = require('./moduleA')
moduleA.sayHi('Kevin Tian')
moduleA.sayHello('Kevin Tian')

var moduleB = require('./moduleB')
moduleB.sayHi('Kevin Tian')
moduleB.sayHello('Kevin Tian')

