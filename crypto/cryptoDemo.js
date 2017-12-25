/**
 * 1. md5: 一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示
 * 2. shaX: 哈希算法; sha1, sha256, sha512
 * 3. hmac: 基于md5/sha1等哈希算法, 外加秘钥
 * 4. aes: 一种常用的对称加密算法，加解密都用同一个密钥
 */
const crypto = require('crypto')
const content = 'hi'

//md5
const md5Hash = crypto.createHash('md5')
md5Hash.update(content)
console.log('md5 of %s: %s', content, md5Hash.digest('hex'))

//shaX
const sha1Hash = crypto.createHash('sha1')
sha1Hash.update(content)
console.log('sha1 of %s: %s', content, sha1Hash.digest('hex'))
const sha256Hash = crypto.createHash('sha256')
sha256Hash.update(content)
console.log('sha256 of %s: %s', content, sha256Hash.digest('hex'))
const sha512Hash = crypto.createHash('sha512')
sha512Hash.update(content)
console.log('sha512 of %s: %s', content, sha512Hash.digest('hex'))

//hmac
const hash = 'sha256'
const secret = 'xxx'
const hmac = crypto.createHmac(hash, secret)
hmac.update(content)
console.log('hmac of %s: %s', content, hmac.digest('hex'))

//aes
const key = 'kevin'
var encrypted = aesEncrypt(content, key);
var decrypted = aesDecrypt(encrypted, key);
console.log('aes(%s): encrypted text=%s, decrypted text=%s', content, encrypted, decrypted)
function aesEncrypt(content, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(content, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}