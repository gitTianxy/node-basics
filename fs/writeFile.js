/**
 * 
 */
var fs = require('fs')

function writeASync(file, data, cb) {
    fs.writeFile(file, data, function (err) {
        if (err) {
            throw err
        } else {
            cb()
        }
    })
}

function writeSync(file, data) {
    fs.writeFileSync(file, data)
}

var f = 'data/output.txt'
var data = 'Hello, Node.js'
try {
    writeSync(f, data)
    console.log('write sync succ.')
} catch (error) {
    console.error('write sync fail.', error)
}
try {
    writeASync(f, data, function () {
        console.log('write async succ.')
    })
} catch (error) {
    console.error('write async fail.', error)
}