const util = require('util')
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

// create: POST
router.post('/', function (req, res) {
    console.log('POST request. body:', util.inspect(req.body))
    res.status(200).send('succ')
})

// retrieve: GET
router.get('/:id', function (req, res) {
    console.log('GET request. params:', req.params)
    res.status(200).send('succ')
})

// update: PUT
router.put('/:id', function (req, res) {
    console.log('PUT request. params:%s, body:%s', util.inspect(req.params), util.inspect(req.body))
    res.status(200).send('succ')
})

// delete: DELETE
router.delete('/:id', function (req, res) {
    console.log('DELETE request. params:', req.params)
    res.status(200).send('succ')
})

// finally
module.exports = router;