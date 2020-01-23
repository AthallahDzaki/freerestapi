const config  = require('./config')
const request = require('request')

class Movie {
  get(q, callback) {
    request.get(config.movie.BASE_URL+q, {json: true}, (err, resp, body) => {
      const re = body['data'].length
      if (re == 0) {
        callback(undefined, {
          code: 400,
          message: ` ${q} Movie's Not Found.`,
          totalMovie: re
        })
      } else {
        callback(undefined, {
          code: 200,
          message: 'success',
          totalMovie: `${body['dataLength']}`,
          result: [{
             title: body['data'][0]['title'],
             synopsis: body['data'][0]['movieInformation']['synopsis'],
             release: body['data'][0]['movieInformation']['dateRelease'],
             duration: body['data'][0]['movieInformation']['duration'],
             videoEmbed: body['data'][0]['videoEmbed'][0],
             linkDownload: body['data'][0]['linkDownload'][0]
          }]
        })
      }
    })
  }
}

module.exports = { Movie }
