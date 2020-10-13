const needle = require('needle')

const Headers = (url) => new Promise((resolve, reject) => {
    if (!url) { reject('pliese enter url') }

    needle(url, (error, resp, body) => {
        resolve({
            result: resp.headers
        })
    })
})


module.exports = Headers
