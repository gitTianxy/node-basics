/**
 * 文件编码
 * a. 如果读取的是文本文件, 可以通过指明编码直接获得文本内容; 
 * b. 如果读取的是其他二进制文件--读取时不指明编码, 则返回的data是一个Buffer类型对象(可以和string互相转换)
 * 
 * 注:
 * 异步调用就不能用return来返回值了, 而只能用callback
 */
var fs = require('fs')

 // read sync
function readSync(file) {
    return fs.readFileSync(file, 'utf-8')
}

 // read async
function readAsync(file, cb) {
    fs.readFile(file, 'utf-8', function(err, data){
        if (err) {
            throw err
        } else {
            cb(data)
        }
    })
}

var f = 'data/input.txt'
try {
    console.log('read sync: %s', readSync(f))
} catch (error) {
    console.error('read sync fail.', error)
}
try {
    readAsync(f, function(content) {
        console.log('read async: %s', content)
    })
} catch (error) {
    console.error('read async fail.', error)
}