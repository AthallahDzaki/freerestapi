const config = require('./config')
const needle = require('needle')
var hash     = require('hash.js')
require('dotenv').config()

var i = 1
class Spam {
  wa(nomor, key, callback) {
    const _key = hash.sha1().update(process.env.KEY_SPAM).digest('hex')
    console.log('api key : '+_key)
    setTimeout(() => {
      needle(config.spam.BASE_URL+nomor, (error, response, body) => {
        if (toString(body).match(/errors/gi) || key != _key) {
          callback({
            code: 400,
            message: 'Api key not valid, pliese try again later.',
            cl: 'sha?|anjaySpam'
          }, undefined)
        } else {
          callback(undefined, {
            code: 200,
            message: 'success',
            detail: [{
              no: nomor,
              keys: key
            }]
          })
        }
      })
      i++
    }, 0.1)
  }
}

module.exports = { Spam }
