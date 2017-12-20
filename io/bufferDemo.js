/**
 * JavaScript 没有二进制数据类型。但在处理像TCP流或文件流时，必须使用到二进制数据。
 * 因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
 * 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
 * Buffer默认编码为utf8
 * 
 * Buffer APIs:
 * 1. create buffer
 *      - allocate buffer of certain size
 *      - create buffer from a src
 * 2. write bytes into buffer
 *      - to string
 *      - to JSON({'type':type,'data':data})
 * 3. read bytes from buffer
 * 4. other buffer operations:
 *      - length
 *      - concat/slice
 *      - compare
 *      - copy
 */
const util = require('util');

// 1-A. allocate buffer of certain size
var size = 10;
var fill = 3;
var encoding = 'utf8';
const bufAlloc = Buffer.alloc(size);
console.log('buffer of size ' + size + ': ' + bufAlloc.toJSON().data);
const bufWithFill = Buffer.alloc(size, fill);
console.log('buffer with fill \'' + fill + '\': ' + bufWithFill.toJSON().data);
// 1-B. create buffer from a src
const bufFromArray = Buffer.from([1, 2, 3]);
console.log('buffer from array: ' + bufFromArray.toJSON().data);
const bufFromStr = Buffer.from('hello', 'ascii');
console.log('buffer from string: ' + bufFromStr.toString());
// 2. write bytes into buffer
var content = "hello, nodeJS";
var offset = 2;
var length = content.length - offset;
var encoding = 'utf8';
var buf = Buffer.alloc(content.length);
buf.write(content);
console.log('buffer write:' + buf.toString());
buf = Buffer.alloc(content.length);
buf.write(content, offset, length);
console.log(util.format('buffer write(offset:%d, length:%s):', offset, length, buf.toString()));
var buf26 = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf26[i] = i + 97;
}
console.log(util.format('write buffer byte by byte:%s', buf26.toString()));
// 3. read bytes from buffer
var encoding = 'utf8'
var start = offset + 'hello'.length;
var end = content.length;
console.log(util.format('read buffer to string(start:%d, end:%d):%s', start, end, buf.toString(encoding, start, end)));
console.log(util.format('read buffer to JSON: type=%s, data=%s', buf.toJSON().type, buf.toJSON().data));
// 4-A. buffer length
console.log(util.format('buffer length: %d', buf.length));
// 4-B. buffer concat/slice
const buf1 = Buffer.from(('菜鸟教程'));
const buf2 = Buffer.from(('www.runoob.com'));
var bufList = [buf1, buf2];
var bufConcat = Buffer.concat(bufList);
console.log("bufConcat: " + bufConcat.toString());
var sliceStart = buf1.length;
var sliceEnd = bufConcat.length;
var sliceBuf = bufConcat.slice(sliceStart, sliceEnd);
console.log(util.format('buffer(%s) sliced(start:%d, end:%d): %s', bufConcat.toString(), sliceStart, sliceEnd, sliceBuf.toString()));
// 4-C. buffer compare
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);
if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
// 4-D. buffer copy
var srcBuf = Buffer.from('abcdefghijkl');
var targetBuf = Buffer.alloc(srcBuf.length);
var targetStart = 6;
var srcStart = 3;
var srcEnd = srcBuf.length;
srcBuf.copy(targetBuf, targetStart, srcStart, srcEnd);
console.log(util.format('target buffer: %s', targetBuf.toString()));
