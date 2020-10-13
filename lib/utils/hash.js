const crypt = require('hash.js');

const HashGen = (type, text) => new Promise((resolve, reject) => {
    switch (type) {
        case 'sha1':
            const data1 = crypt.sha1().update(text).digest('hex')
            resolve({
                code: 200,
                message: 'success',
                result: [{plain: text, hash: 'sha1', encrypt: data1}]
            })
            break
        case 'sha256':
            const data2 = crypt.sha256().update(text).digest('hex')
            resolve({
                code: 200,
                message: 'success',
                result: [{plain: text, hash: 'sha1', encrypt: data2}]
            })
            break
        case 'sha512':
            const data3 = crypt.sha512().update(text).digest('hex')
            resolve({
                code: 200,
                message: 'success',
                result: [{plain: text, hash: 'sha1', encrypt: data3}]
            })
            break
        default:
            break;
    }
})

module.exports = HashGen
