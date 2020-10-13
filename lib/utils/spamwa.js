require('dotenv').config()
const needle = require('needle')
const hash   = require('hash.js')

const url = 'https://core.ktbs.io/v2/user/registration/otp/'

var i = 1

const Spam = (nomor, key) => new Promise((resolve, reject) => {
    const _key = hash.sha1().update(process.env.KEY_SPAM).digest('hex')

    setTimeout(() => {
        needle(url + nomor, (error, resp, body) => {
            if (toString(body).match(/errors/gi) || key != _key) {
                reject({
                    message: 'api key not valid or otp has been sent, try again leter.'
                })
            } else {
                resolve({
                    message: 'success',
                    details: [
                      {
                          no: nomor,
                          key: key
                      }
                    ],
                    delay: '5s'
                })
            }
        })
        i++
    }, 5000)
})

module.exports = Spam
