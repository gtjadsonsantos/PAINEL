const crypto = require('crypto');

module.exports = {
  
 _crypto(alg,passwd){
    const cipher = crypto.createCipher(alg,passwd)
    const crypted = cipher.update(passwd, 'utf8','hex')
    return crypted
},
 _decrypt(alg, passwd, hash){
    const decipher = crypto.createDecipher(alg,passwd)
    const decrypted = decipher.update(hash,'hex','utf8')
    return decrypted
    }
}
