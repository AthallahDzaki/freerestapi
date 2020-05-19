var express = require('express')
var router  = express.Router()

var {
  Main,
  Proxy,
  Headers,
  UserWP,
  Base64,
  Base32,
  getIp,
  Gdrive,
  urlShort,
  c19
} = require('./../config/utils')

var {
  HashGen
} = require('./../config/hash')

// var { Movie }    = require('./../config/movie')
var { FakerGen } = require('./../config/fakeName')
var { Hilih }    = require('./../config/hilih')
var { Spam }     = require('./../config/spam_wa')
var { Check }    = require('./../config/tokped')

router.get('/corona', (req, res, next) => {
  const main = new c19()
  main.indo((error, {negara, positif, sembuh, meninggal, dirawat} = {}) => {
    res.send({
      negara,
      positif,
      sembuh,
      meninggal,
      dirawat
    })
  })
})

router.get('/tokped', (req, res, next) => {
  const no = req.query.no
  if (!no) {
    res.send({
      code: 200,
      message: 'Pliese input parameter url.'
    })
  } else {
    const main = new Check()
    main.tokped(no, (error, {code, message, result} = {} ) => {
      if (!error) {
        res.send({
          code,
          message,
          result
        })
      } else {
        res.send({ error })
      }
    })
  }
})

router.get('/spam', (req, res, next) => {
  const main = new Spam()
//  const _key = hash.sha512().update(process.env.KEY_SPAM).digest('hex')
//  console.log('api key : '+_key)
  const key   = req.query.key
  const no    = req.query.no
  if (!no || !key) {
    res.send({
      code: 200,
      message: 'Pliese input parameter url and api key.'
    })
  } else {
    main.wa(no, key, (error, {code, message, detail} = {} ) => {
      if (!error) {
        res.send({
          code,
          message,
          detail
        })
      } else {
        res.send({ error })
      }
    })
  }
})

router.get('/iplookup', (req, res, next) => {
    const main = new Main()
    const q = req.query.q
    if (!q) {
      res.status(200).send({
        code: 200,
        message: 'Pliese input parameter url.'
      })
    } else {
    main.iplookup(q, (error, {
      code,
      message,
      ip,
      country,
      region,
      latitude,
      longtitude,
      timezone,
      org,
      as,
      city,
      countryCode,
      zip,
      maps
    } = {} ) => {
      if (!error) {
        res.send({
          code,
          message,
          ip,
          country,
          region,
          latitude,
          longtitude,
          timezone,
          org,
          as,
          city,
          countryCode,
          zip,
          maps
        })
      } else {
        res.status(422).send({ error })
      }
    })
    }
  })

  router.get('/fakename', (req, res, next) => {
    const main    = new FakerGen()
    const country = req.query.country
    if (!country) {
      res.status(500).send({code: 500, message: "Pliese input code country."})
    } else {
      main.generate(country, (error, {
        code,
        message,
        name,
        birthday,
        address,
        city,
        country,
        zip,
        phone_number,
        username,
        password,
        email
      } = {} ) => {
        if (!error) {
          res.status(200).send({
            code,
            message,
            name,
            birthday,
            address,
            city,
            country,
            zip,
            phone_number,
            username,
            password,
            email
          })
        } else {
            res.status(422).send({ error })
        }
      })
    }
  })

  router.get('/proxy', (req, res, next) => {
    const main = new Proxy()
    main.generate((error, {
      code,
      message,
      ip,
      port,
      protocol,
      country,
      allowPost,
      allowHttps,
      connectTime,
      downloadSpeed,
      uptime
    } = {} ) => {
      if (!error) {
        res.status(200).send({
          code,
          message,
          ip,
          port,
          protocol,
          country,
          allowPost,
          allowHttps,
          connectTime,
          downloadSpeed,
          uptime
        })
      } else {
        res.status(500).send({ error })
      }
    })
  })

  router.get('/http-headers', (req, res, next) => {
    const main = new Headers()
    const q = req.query.q
    console.log(q)
    if (!q) {
      res.status(500).send({
        code: 500,
        message: 'required parameter url.'
      })
    } else {
      main.generate(q, (error, {result} = {} ) => {
        if (!error) {
          res.status(200).send({
            result
          })
        } else {
          res.status(500).send({ error })
        }
      })
    }
  })

  router.get('/userwp', (req, res, next) => {
    const main = new UserWP()
    const q = req.query.q
    if (!q) {
      res.status(500).send({
        code: 500,
        message: 'Pliese input parameter url.'
      })
    } else {
      main.user(q, (error, {code, message, urls, user} = {} ) => {
        if (!error) {
          res.status(200).send({
            code,
            message,
            urls,
            user
          })
        } else {
          res.status(500).send({
            error
          })
        }
      })
    }
  })

  router.get('/base64', (req, res, next) => {
    const main = new Base64()
    const encode = req.query.encode
    const decode = req.query.decode
    if (!encode && !decode) {
      res.status(500).send({
        code: 500,
        message: 'Failed, pliese input parameter.'
      })
    } else if (encode) {
      main.enc(encode, (error, {code, message, result} = {} ) => {
        res.status(200).send({
          code,
          message,
          result
        })
      })
    } else if (decode) {
      main.dec(decode, (error, {code, message, result} = {} ) => {
        res.status(200).send({
          code,
          message,
          result
        })
      })
    }
  })

  router.get('/base32', (req, res, next) => {
    const main = new Base32()
    const encode = req.query.encode
    const decode = req.query.decode
    if (!encode && !decode) {
      res.status(500).send({
        code: 500,
        message: 'Failed, pliese input parameter.'
      })
    } else if (encode) {
      main.enc(encode, (error, {code, message, result} = {} ) => {
        res.status(200).send({
          code,
          message,
          result
        })
      })
    } else if (decode) {
      main.dec(decode, (error, {code, message, result} = {} ) => {
        res.status(200).send({
          code,
          message,
          result
        })
      })
    }
  })

  router.get('/gdrive', (req, res, next) => {
    const url = req.query.url
    const main = new Gdrive()
    if (!url) {
      res.send({ code: 400, message: 'pliese enter url'})
    } else if (!url.match(/drive.google.com/i)) {
      res.send({ code: 400, message: 'pliese input googledrive only link!.'})
    } else {
      main.drive(url, (error, {
        code,
        message,
        result
      } = {}) => {
        if (!error) {
          res.send({
            code,
            message,
            result
          })
        } else {
          res.send({ error })
        }
      })
    }
  })

  router.get('/ushort', (req, res, next) => {
    const main = new urlShort()
    const url  = req.query.url
    if (!url) {
      res.status(500).send({
        code: 500,
        message: 'pliese input parameter URL!.'
      })
    } else {
      main.short(url, (error, {code, message, result} = {} ) => {
        if (!error) {
          res.send({
            code,
            message,
            result
          })
        } else {
          res.send({ error })
        }
      })
    }
  })

  router.get('/sha1', (req, res, next) => {
    const main = new HashGen()
    const str  = req.query.str
    if (!str) {
      res.send({
        code: 404,
        message: 'pliese input parameter url.'
      })
    } else {
      main.sha1(str, (error, {code, message, result} = {} ) => {
        res.send({
          code,
          message,
          result
        })
      })
    }
  })

  router.get('/sha256', (req, res, next) => {
    const main = new HashGen()
    const str  = req.query.str
    if (!str) {
      res.send({
        code: 404,
        message: 'pliese input parameter url.'
      })
    } else {
      main.sha256(str, (error, {code, message, result} = {} ) => {
        res.send({
          code,
          message,
          result
        })
      })
    }
  })

  router.get('/sha512', (req, res, next) => {
    const main = new HashGen()
    const str  = req.query.str
    if (!str) {
      res.send({
        code: 404,
        message: 'pliese input parameter url.'
      })
    } else {
      main.sha512(str, (error, {code, message, result} = {} ) => {
        res.send({
          code,
          message,
          result
        })
      })
    }
  })

  /* -- disable api
   router.get('/movie', (req, res, next) => {
    const main = new Movie()
    const q = req.query.q
    if (!q) {
      res.send({
        code: 400,
        message: 'pliese input parameter url.'
      })
    } else {
      main.get(q, (error, {code, message, totalMovie, result} = {} ) => {
       if (!error) {
         res.send({
           code,
           message,
           totalMovie,
           result
         })
       } else {
         res.send({ error })
       }
      })
    }
  })

  router.get('/cur_ig', (req, res, next) => {
    res.json({code: 200, message: 'comming soon!.'})
  }) */

  router.get('/hilih', (req, res, next) => {
    const kata = req.query.kata
    const main = new Hilih()
    if (!kata) {
      res.send({
        code: 400,
        message: 'pliese input parameter url.'
      })
    } else {
      main.kintil(kata, (error, {code, result} = {} ) => {
        res.send({
          code,
          result
        })
      })
    }
  })

module.exports = router
