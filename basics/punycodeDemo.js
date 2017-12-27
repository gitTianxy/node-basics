/**
 * 1. encode
 * 2. decode
 */
const punycode = require('punycode')

// encode string: UNICODE 2 ASCII
var e1 = 'mañana'
console.log("'%s' encoded: %s", e1, punycode.encode(e1))
var e2 = '☃-⌘'
console.log("'%s' encoded: %s", e2, punycode.encode(e2))

// decode string: ASCII 2 UNICODE
var d1 = 'maana-pta'
console.log("'%s' decoded: %s", d1, punycode.decode(d1))
var d2 = '--dqo34k'
console.log("'%s' decoded: %s", d2, punycode.decode(d2))

