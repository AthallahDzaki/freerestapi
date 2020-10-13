const crypt = require('hash.js');

const HashGen = (type, text) => new Promise((resolve, reject) => {
    switch (type) {
        case 'sha1':
            const data = crypt.sha1().update(text).digest('hex')
            resolve({
                code: 200,
                message: 'success',
                result: [{plain: text, hash: 'sha1', encrypt: data}]
            })
            break
        case 'sha256':
            const data = crypt.sha256().update(text).digest('hex')
            resolve({
                code: 200,
                message: 'success',
                result: [{plain: text, hash: 'sha1', encrypt: data}]
            })
            break
        case 'sha512':
            const data = crypt.sha512().update(text).digest('hex')
            resolve({
                code: 200,
                message: 'success',
                result: [{plain: text, hash: 'sha1', encrypt: data}]
            })
            break
        default:
            break;
    }
})

module.exports = HashGen
