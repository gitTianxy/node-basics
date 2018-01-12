# NodeJS basics
## 全局变量/对象
* JavaScript有且仅有一个全局对象: 在浏览器中，叫window对象; 而在Node.js环境中，也有唯一的全局对象叫global，这个对象的属性和方法也和浏览器环境的window不同。

## fs模块
* 同步 vs 异步: read/write都提供了同步和异步两种类型方法
* 操作: read, write, status

## web框架
在Node.js诞生后的短短几年里，出现了无数种Web框架、ORM框架、模版引擎、测试框架、自动化构建工具，数量之多，即使是JavaScript老司机，也不免眼花缭乱
### 常见的Web框架
Express，Sails.js，koa，Meteor，DerbyJS，Total.js，restify
### ORM框架
Sequelize，ORM2，Bookshelf.js，Objection.js
### 模版引擎PK
Jade，EJS，Swig，Nunjucks，doT.js
### 测试框架
Mocha，Expresso，Unit.js，Karma
### 构建工具
Grunt，Gulp，Webpack

## OOP
### 原型
* JavaScript对每个创建的对象都会设置一个原型
* 原型链: 当使用对象的'属性'或'方法'时, JS引擎先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined. 所以, 原型链体现了OOP中对象之间的继承关系.
* 如果原型链很长，那么访问一个对象的属性就会因为花更多的时间查找而变得更慢，因此要注意不要把原型链搞得太长。
* 原型链例子:
    - 数组原型链: `myArr-->Array.prototype-->Object.prototype-->null`
    - 函数(函数也是一个对象)原型链：`myFunc-->Function.prototype-->Object.prototype-->null`
* 对于子类中共同的方法如果需要抽象到上一层次, 则把相应的方法赋给这些子类的原型类即可
```js
function SubCls(subAttr,subMethod) {
    this.subAttr = subAttr
    this.subMethod = subMethod
}
SubCls.prototype.pAttr = pAttr
SubCls.prototype.pMethod = function() {
    ... ...
}
```
* 原型继承
    - nodeJS中的`util.inherits(constructor, superConstructor)`实现对象间的原型继承
```js
/** 要实现原型继承需要借助中间函数, 可以把相关方法封装到一个自定义的inherits函数中 **/
// 定义继承关系
inherits(PrimaryStudent, Student);

// 子类 PrimaryStudent
function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量:
    Student.call(this, props);
    this.grade = props.grade || 1;
}
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 父类 Student
function Student(props) {
    this.name = props.name || 'Unnamed';
}
Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

// inherits函数
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
```

### 创建对象: 构造函数
* 除了直接用{ ... }创建一个对象外，JavaScript还可以通过'构造函数'来创建对象: 通过关键字new调用构造函数, 从而返回一个对象.
* 构造函数的定义
    - 形式和普通函数相同
    - 函数名规则同Java类名定义: 首字母大写, 驼峰式
* 使用构造函数时不要忘记写关键字`new`
```
注意，如果不写new，这就是一个普通函数，它返回undefined; 但是，如果写了new，它就变成了一个构造函数.
构造函数中的this指向新创建的对象，并默认返回this，也就是说，不需要在最后写return this。
```
* 通过对象的`constructor`属性可以获取到对象的构造函数
* 对象是构造函数对象的实例
```
stu instanceof Student; // true
```

### 类
* 类定义
    - `class`关键字
    - 类名规则同构造函数名称
    - 构造函数定义使用`constructor`关键字
    - 类方法省略关键字`function`
```js
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
```
* 类继承: 通过关键字`extends`实现
```js
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```
* 原型继承 vs 类继承: 
    - 两者作用完全相同--都是为了实现对象之间的继承关系; 前者定义较繁复, 后者更整洁美观.
    - class的作用就是让JavaScript引擎去实现原来需要我们自己编写的原型链代码。简而言之，用class的好处就是极大地简化了原型链代码。
    - 不是所有的主流浏览器都支持ES6的class。如果一定要现在就用上，就需要一个工具把class代码转换为传统的prototype代码，可以试试Babel这个工具。

## 进程
### 子进程child_process
 * Node 提供了 child_process 模块来创建子进程.
 * child_process方法：
    1. exec - 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
    2. spawn - 使用指定的命令行参数创建新进程。
    3. fork - spawn()的特殊形式, 如 fork('./son.js') 相当于 spawn('node', ['./son.js']) ; 与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。
 * child_process总是包含三个流对象:
    1. child.stdin
    2. child.stdout
    3. child.stderr

## sandboxed environment
* The sandboxed code uses a different V8 Context, meaning that it has a different global object than the rest of the code.
* One can provide the context by "contextifying" a sandbox object. The sandboxed code treats any property on the sandbox like a global variable. Any changes on global variables caused by the sandboxed code are reflected in the sandbox object.