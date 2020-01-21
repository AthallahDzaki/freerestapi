const config  = require('./config')
const request = require('request')

class Movie {
  get(q, callback) {
    request.get(config.movie.BASE_URL+q, {json: true}, (err, resp, body) => {
      if (body['dataLength'] == 0) {
        callback(true, {
          code: 400,
          message: ` ${q} Movie's Not Found.`
        })
      } else {
        callback(true, {
          code: 200,
          message: 'success',
          totalMovie: `${body['dataLength']} movie`,
          result: body
        })
      }
    })
  }
}

module.exports = { Movie }
