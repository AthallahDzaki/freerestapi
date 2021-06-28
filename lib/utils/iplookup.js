const needle = require('needle')

const url = 'http://ip-api.com/json/'

const IpLookup = (ip) => new Promise((resolve, reject) => {
    needle(url + encodeURIComponent(ip), (error, resp, body) => {
        const { status, message, query, country, region, lat, lon, timezone, org, as, city, countryCode, zip } = body
        if (status == 'fail' || message == 'invalid query') {
            reject({
                message: `only ipv6, ${message}`
            })
        } else {
          resolve({
              code: 200,
              message: status,
              ip: query,
              country: country,
              region: region,
              latitude: lat,
              longtitude: lon,
              timezone: timezone,
              org: org,
              as: as,
              city: city,
              countryCode: countryCode,
              zip: zip,
              maps: 'https://www.google.com/maps/@' + lat + ',' + lon
          })
        }
    })
})

module.exports = IpLookup
