const request = require('request')
const needle  = require('needle')
const config  = require('./config')
const faker   = require('faker')
const generate= require('generate-password')
const base64  = require('base-64')
const base32  = require('base32')
const fs      = require('fs')

const randomNum10 = Math.floor(Math.random() * 10)+1
const randomNum20 = Math.floor(Math.random() * 20)+1
const randomNum   = [randomNum10, randomNum20]
const ran         = randomNum[Math.floor(Math.random() * randomNum.length)]
const bool  = new Array(true, false)
const rbool = bool[Math.floor(Math.random() * bool.length)]

const password = generate.generate({
  length : ran,
  numbers: rbool
})

class Main {
  iplookup(q, callback) {
    let url = config.iplookup.BASE_URL+encodeURIComponent(q)
    request.get(url, {json: true}, (error, response, body) => {
      if (body['status'] == 'fail' || body['message'] == 'invalid query') {
        callback({
          code: 422,
          message: 'Hanya menerima ipv4 atau ipv6 saja.'
        }, undefined)
      } else {
        callback(undefined, {
          code: 200,
          message: 'success',
          ip: body['query'],
          country: body['country'],
          region: body['region'],
          latitude: body['lat'],
          longtitude: body['lon'],
          timezone: body['timezone'],
          org: body['org'],
          as: body['as'],
          city: body['city'],
          countryCode: body['countryCode'],
          zip: body['zip'],
          maps: 'https://www.google.com/maps/@'+body['lat']+','+body['lon']
        })
      }
    })
  }
}


class Proxy {
  generate(callback) {
    const url = config.proxy.BASE_URL
    request(url, {json: true}, (error, response, body) => {
      if (!error || response.statusCode == 200) {
        callback(undefined, {
          code: 200,
          message: 'success',
          ip: body["ip"],
          port: body["port"],
          protocol: body["protocol"],
          country: body["country"],
          allowPost: body["allowsPost"],
          allowHttps: body["allowHttps"],
          connectTime: body["connectTime"],
          downloadSpeed: body["downloadSpeed"],
          uptime: body["uptime"]
        })
      } else {
        callback({
          code: 500,
          message: "Error tidak diketahui."
        }, undefined)
      }
    })
  }
}

class Headers {
  generate(q, callback) {
    const url = encodeURIComponent(q)
    needle.get(url, (error, response, body) => {
      callback(undefined, {
        result: response.headers
      })
    })
  }
}

class UserWP {
  user(site, callback) {
    const user = []
    const url = site+'/wp-json/wp/v2/users/'
    needle('get', url, (error, response, body) => {
      if (response.statusCode == 200) {
        for (let i = 0; i < body.length; i++) {
          user.push(body[i]['slug'])
          //console.log(user)
        }
        console.log(user)
        callback(undefined, {
          code: 200,
          message: 'success',
          urls: site,
          user: JSON.stringify(user) //.slice(1, -1)
        })
      } else if (response.statusCode == 404) {
        callback(undefined, {
          code: 404,
          message: "mybe noting geting user on this site"
        })
      } else {
        callback({
          code: 500,
          message: 'failed. try again later.'
        }, undefined)
      }
    })
  }
}

class Base64 {
  enc(text, callback) {
    const data = base64.encode(text)
    callback(undefined, {
      code: 200,
      message: 'success',
      result: [{
        string: text,
        encode: data
      }]
    })
  }
  dec(text, callback) {
    const data = base64.decode(text)
    callback(undefined, {
      code: 200,
      message: 'success',
      result: [{
        enc: text,
        decode: data
      }]
    })
  }

class Base32 {
  enc(text, callback) {
    const data = base32.encode(text)
    callback(undefined, {
      code: 200,
      message: 'success',
      result: [{
        string: text,
        encode: data
      }]
    })
  }
  dec(text, callback) {
    const data = base32.decode(text)
    callback(undefined, {
      code: 200,
      message: 'success',
      result: [{
        enc: text,
        decode: data
      }]
    })
  }

class getIp{
  main(callback){
    const ip = []
    needle('get', config.ip.BASE_URL, (error, response, body) => {
      ip.push(body['ip'])
      callback(undefined, {
        ip: body['ip']
      })
      console.log(ip)
      const result = `${body['ip']}\n`
      fs.appendFile('ip.txt', result, (err) => {
        if (err) throw err
      })
    })
  }
}

class Gdrive {
  drive(q, callback){
    const urls = q.split('uc').join('open')
    request.get(config.short.BASE_URL+urls, {json: true}, (err, resp, body) => {
        //console.log(body)
      callback(undefined, {
        code: 200,
        message: 'success',
        result: [{
          url: q,
          link: body['short']
        }]
      })
    })
  }
}

class urlShort {
  short(uri, callback) {
    const url = config.short.BASE_URL+uri
    request.get(url, {json: true}, (err, resp, body) => {
      callback(undefined, {
        code: 200,
        message: 'success',
        result: [{
          original: uri,
          short: body['short']
        }]
      })
    })
  }
}


module.exports = {
  Main,
  Proxy,
  Headers,
  UserWP,
  Base64,
  Base32,
  getIp,
  Gdrive,
  urlShort
}

