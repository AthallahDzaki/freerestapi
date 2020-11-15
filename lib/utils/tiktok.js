const needle = require('needle')
const _ = require('lodash')

let uri = 'http://st4rz.herokuapp.com/api/tiktok?url='

const Tiktok = (url) => new Promise((resolve, reject) => {
    if (typeof url === 'undefined') { reject('masukan text nya kak.') }

    needle(uri + url, (err, resp, body) => {
        resolve(
            body
        )
    })
})

module.exports = Tiktok
