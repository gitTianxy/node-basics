/**
 * Node.js 异步编程依托于回调来实现.
 * 回调函数在完成任务后就会被调用.
 * Node 使用了大量的回调函数--Node 所有 API 都支持回调函数.
 */

var fs = require("fs");

function readSync(filePath) {
    console.log("*** read " + filePath + " sync")
    var data = fs.readFileSync(filePath);
    console.log(data.toString());
    console.log("程序执行结束!");
}

function readAsync(filePath) {
    console.log("*** read " + filePath + " async")
    fs.readFile(filePath, function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    });
    console.log("程序执行结束!");
}

var path = './data/input.txt';
readSync(path);
readAsync(path);