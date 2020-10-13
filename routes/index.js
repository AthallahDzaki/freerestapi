var express = require('express')
var router = express.Router()
require('dotenv').config()

  router.get('/doc/hash_identifier', (res) => {
    res.render('hash_ident', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/covid19', (res) => {
    res.render('cv19', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/dicoding', (res) => {
    res.render('dicoding', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/tokped', (res) => {
    res.render('tokped', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/spam_wa', (res) => {
    res.render('spam_wa', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/proxy', (res) => {
    res.render('proxy', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/iplookup', (res) => {
    res.render('iplookup', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/fakename', (res) => {
    res.render('fakename', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/http', (res) => {
    res.render('http', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/userwp', (res) => {
    res.render('userwp', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/base64', (res) => {
    res.render('base64', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/base32', (res) => {
    res.render('base32', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/gdrive', (res) => {
    res.render('gdrive', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/ushort', (res) => {
    res.render('ushort', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/hash', (res) => {
    res.render('hash', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/movie', (res) => {
    res.render('movie', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/cur_ig', (res) => {
    res.render('curig', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/hilih', (res) => {
    res.render('hilih', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/', (res) => {
    res.redirect('/beranda')
  })

  router.get('/about', (res) => {
    res.render('about', {host: process.env.S_HOST, title: "about | Online Api's Tools"})
  })

  router.get('/beranda', (res) => {
     res.render('index', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

module.exports = router
