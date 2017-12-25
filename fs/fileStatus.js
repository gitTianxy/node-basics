/**
 * file status
 */
const fs = require('fs')
const path = require('path')

var pt = 'data/input.txt'
fs.stat(pt, function(err, stats){
    if (err) {
        console.error('get status error.', err)
        return
    }
    console.info('name: %s', path.parse(pt).name)
    var type = null;
    if (stats.isDirectory) {
        type = 'directory'
    } else if (stats.isFile) {
        type = 'file'
    } else {
        type = 'others'
    }
    console.info('type: %s', type)
    console.info('size: %s', stats.size)
    console.info('create time: %s, modify time: %s', stats.ctime, stats.mtime)
})