var express = require('express')
var router = express.Router()
var fs = require('fs')
require('dotenv').config()

  /* -- disable
  router.get('/doc/movie', (req, res, next) => {
    res.render('movie', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  }) */
  router.get('/doc/covid19', (req, res, next) => {
    res.render('cv19', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/dicoding', (req, res, next) => {
    res.render('dicoding', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/tokped', (req, res, next) => {
    res.render('tokped', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/spam_wa', (req, res, next) => {
    res.render('spam_wa', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/proxy', (req, res, next) => {
    res.render('proxy', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/iplookup', (req, res, next) => {
    res.render('iplookup', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/fakename', (req, res, next) => {
    res.render('fakename', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/http', (req, res, next) => {
    res.render('http', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/userwp', (req, res, next) => {
    res.render('userwp', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/base64', (req, res, next) => {
    res.render('base64', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/base32', (req, res, next) => {
    res.render('base32', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/gdrive', (req, res, next) => {
    res.render('gdrive', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/ushort', (req, res, next) => {
    res.render('ushort', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/hash', (req, res, next) => {
    res.render('hash', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/movie', (req, res, next) => {
    res.render('movie', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/cur_ig', (req, res, next) => {
    res.render('curig', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/doc/hilih', (req, res, next) => {
    res.render('hilih', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })
  router.get('/', (req, res, next) => {
    res.redirect('/beranda')
  })
  router.get('/about', (req, res, next) => {
    res.render('about', {host: process.env.S_HOST, title: "about | Online Api's Tools"})
  })
  router.get('/beranda', (req, res, next) => {
     const view  = 'abc\n'
     const rview = view[Math.floor(Math.random() * view.length)]
/*     fs.appendFile('./../view.txt', rview, function(err) {
       if (err) throw err
       console.log(' [√] success saved on view.txt')
     })*/
     res.render('index', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  /*router.get('/home', (req, res, next) => {
    res.status(200).send(JSON.sringify({
      code: res.status(200),
      host: process.env.S_HOST,
      title: 'Ostech | APi Online Tools',
      cretor: 'Ibnusyawall'
    }))
  }*/

module.exports = router
