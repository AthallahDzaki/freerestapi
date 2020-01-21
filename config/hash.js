const crypt = require('hash.js')

class HashGen {
  sha1(text, callback) {
    const data = crypt.sha1().update(text).digest('hex')
    callback(undefined, {
      code: 200,
      message: 'success',
      result: [{plain: text, hash: 'sha1', encrypt: data}]
    })
  }
  sha256(text, callback) {
    const data = crypt.sha256().update(text).digest('hex')
    callback(undefined, {
      code: 200,
      message: 'success',
      result: [{plain: text, hash: 'sha256', encrypt: data}]
    })
  }
  sha512(text, callback) {
    const data = crypt.sha512().update(text).digest('hex')
    callback(undefined, {
      code: 200,
      message: 'success',
      result: [{plain: text, hash: 'sha512', encrypt: data}]
    })
  }
}

module.exports = {
  HashGen
}
