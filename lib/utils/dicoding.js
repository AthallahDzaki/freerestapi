const supertest = require('supertest')

const url = 'https://idcamp.indosatooredoo.com/api'

const Dicoding = (email) => new Promise((resolve, reject) => {
    supertest(url).post('/participation-status').send({
        email: email
    }).set('Accept', 'application/json').end((err, done) => {
      if (err) throw err
      resolve({
          data: JSON.parse(done.res.text)
      })
    })
})

module.exports = Dicoding
