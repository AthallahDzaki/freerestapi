const base64  = require('base-64')
const base32  = require('base32')

const Base = (type, text) => new Promise((resolve, reject) => {
    switch (type) {
        case 'b64enc':
            const data = base64.encode(text)
            resolve({
                code: 200,
                message: 'success',
                result: [{
                   string: text,
                   encode: data
                }]
            })
            break
        case 'b64dec':
            const data = base64.decode(text)
            resolve({
                code: 200,
                message: 'success',
                result: [{
                   enc: text,
                   encode: data
                }]
            })
            break
        case 'b32enc':
            const data = base32.encode(text)
            resolve({
                code: 200,
                message: 'success',
                result: [{
                   string: text,
                   encode: data
                }]
            })
            break
        case 'b32dec':
            const data = base32.decode(text)
            resolve({
                code: 200,
                message: 'success',
                result: [{
                   enc: text,
                   encode: data
                }]
            })
            break
        default:
            break
    }
})

module.exports = Base
