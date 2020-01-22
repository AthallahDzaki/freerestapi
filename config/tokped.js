const config = require('./config')
const request= require('request')

class Check {
  tokped(nomor, callback) {
    request(config.tokped.BASE_URL+nomor, {json: true}, (err, resp, body) => {
      if (!body['oke'] == true) {
        callback(undefined, {
          code: 200,
          message: 'success',
          result: [{
            no: nomor,
            status: 'invalid'
          }]
        })
      } else {
        callback(undefined, {
          code: 200,
          message: 'success',
          result: [{
            no: nomor,
            status: 'valid'
          }]
        })
      }
    })
  }
}

module.exports = { Check }
