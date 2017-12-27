/**
 * http client
 * 
 * NOTE:
 * test when 'httpServerDemo.js' is running
 */
const http = require('http');

var options = {
    host: 'localhost',
    port: '8081',
    path: '/data/input.txt'
};

var callback = function (response) {
    var body = '';
    // get data
    response.on('data', function (data) {
        body += data;
    });
    // display data after request end
    response.on('end', function () {
        console.log(body);
    });
}

var req = http.request(options, callback);
req.end();