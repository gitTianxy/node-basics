/**
 * 1. a minimal http server
 * 2. a fs
 */
var http = require('http'),
    url = require('url')
var fs = require('fs'),
    path = require('path')

// a minimal http server
start_a_minimal_svc(8080)
function start_a_minimal_svc(port) {
    var s = http.createServer(function(request, response){
        console.info('%s: %s', request.method, request.url)
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('Hello world!');
    })
    s.listen(port)
    console.info('a minimal http-server is running at localhost:', port)
}

// a http-fs
start_a_http_fs(8081, process.argv[2] || '.')
function start_a_http_fs(port,root) {
    var s = http.createServer(function(request, response) {
        var pn = url.parse(request.url).pathname
        var file = path.join(root, pn)
        fs.stat(file, function(error, status){
            if (!error && status.isFile()) {
                console.info('200 %s:%s', request.method, request.url)
                response.writeHead(200)
                fs.createReadStream(file).pipe(response)
            } else {
                console.warn('404 %s:%s', request.method, request.url)
                response.writeHead(404);
                response.end('404 Not Found');
            }
        })
    })
    s.listen(port)
    console.info('a http-fs is running at localhost:', port)
}