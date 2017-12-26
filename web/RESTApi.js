/**
 * crud
 */
const util = require('util')
var express = require('express');
var app = express();
var RESTController = require('./RESTController');
app.use('/rest', RESTController);

// start the server
var port = 8080
var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});

