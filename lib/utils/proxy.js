const needle = require('needle')

const url = 'https://api.getproxylist.com/proxy'

const Proxy = () => new Promise((resolve, reject) => {
    needle(url, (err, resp, body) => {
      if (!err) {
          const { ip, port, protocol, country, allowsPost, allowsHttps, connectTime, downloadSpeed, uptime } = body
          resolve({
              code: 200,
              message: 'success',
              ip: ip,
              port: port,
              protocol: protocol,
              country: country,
              allowPost: allowsPost,
              allowHttps: allowsHttps,
              connectTime: connectTime,
              downloadSpeed: downloadSpeed,
              uptime: uptime
          })
      } else {
          reject({
              message: "Error"
          })
      }
    })
})

Proxy().then(data => console.log(data)).catch(err => console.log(err))

module.exports = Proxy
