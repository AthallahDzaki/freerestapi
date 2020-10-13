const needle = require('needle')

const WPUser = (site) => new Promise((resolve, reject) => {
    const user = []
    const url = site+'/wp-json/wp/v2/users/'
    needle(url, (err, resp, body) => {
        if (!err) {
            for (let i = 0; i < body.length; i++) {
                user.push(body[i]['slug'])
            }
            resolve({
                code: resp.statusCode,
                message: 'success',
                url: site,
                user: JSON.stringify(user)
            })
        } else {
            reject({
                code: 500,
                message: 'failed. try again later.'
            })
        }
    })
})

WPUser(process.argv[2]).then(data => console.log(data)).catch(err => console.log(err))
module.exports = WPUser
