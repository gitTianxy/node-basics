/**
 * 流(stream)
 * 流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。
 * 
 * 输入/输出
 * a. 标准输入流(stdin): 从键盘输入到应用程序;
 * b. 标准输出流(stdout): 应用程序把字符一个一个输出到显示器上.
 * 
 * 流事件
 * 在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：
 * data事件: 表示流的数据已经可以读取了;
 * end事件: 表示这个流已经到末尾了，没有数据可以读取了;
 * error事件: 表示出错了。
 * 
 * 管道(pipe)
 * 将输入流和输出流首尾串联, 即得到一个管道. 
 * 典型例子: 将一个读流接入一个写流, 可以完成文件复制.
 */
var fs = require('fs')
var zlib = require('zlib')

 // read stream
readStream('data/input.txt', 'utf-8')
function readStream(path, encoding) {
    var rs = fs.createReadStream(path, encoding)
    rs.on('open', function () {
        console.log('read stream START')
    })
    rs.on('data', function (chunk) {
        console.log('read:', chunk)
    })
    rs.on('error', function (error) {
        console.error('read stream error.', error)
    })
    rs.on('end', function () {
        console.log('read stream END')
    })
}

// write stream
writeStream('data/output.txt', 'utf-8')
function writeStream(path, encoding) {
    var ws = fs.createWriteStream(path, encoding)
    for(var i=0; i<100; i++) {
        ws.write('append line: ' + i + '\n')
    }
    ws.end()
}

// pipe
copy('data/input.txt', 'data/input_copy.txt')
gZip('data/input.txt', 'data/input.txt.gz')
function copy(from, to) {
    var rs = fs.createReadStream(from)
    var ws = fs.createWriteStream(to)
    rs.pipe(ws)
}
function gZip(src, target) {
    var rs = fs.createReadStream(src)
    var zip = zlib.createGzip()
    var ws = fs.createWriteStream(target)
    rs.pipe(zip).pipe(ws)
}
