/**
 * 在JavaScript中，一个函数可以作为另一个函数的参数。
 * 我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
 */
var http = require('http')

// named function as param
http.createServer(onReq).listen(8080)
console.log('server is runing at localhost listenning', 8080)
function onReq(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}

// anonymous function as param
http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}).listen(8081)
console.log('server is runing at localhost listenning', 8081)
