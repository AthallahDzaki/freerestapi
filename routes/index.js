var express = require('express')
var router = express.Router()
require('dotenv').config()

  router.get('/doc/hash_identifier', (req, res) => {
    res.render('hash_ident', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/covid19', (req, res) => {
    res.render('cv19', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/dicoding', (req, res) => {
    res.render('dicoding', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/tokped', (req, res) => {
    res.render('tokped', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/spam_wa', (req, res) => {
    res.render('spam_wa', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/proxy', (req, res) => {
    res.render('proxy', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/iplookup', (req, res) => {
    res.render('iplookup', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/fakename', (req, res) => {
    res.render('fakename', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/http', (req, res) => {
    res.render('http', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/userwp', (req, res) => {
    res.render('userwp', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/base64', (req, res) => {
    res.render('base64', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/base32', (req, res) => {
    res.render('base32', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/gdrive', (req, res) => {
    res.render('gdrive', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/ushort', (req, res) => {
    res.render('ushort', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/hash', (req, res) => {
    res.render('hash', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/movie', (req, res) => {
    res.render('movie', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/cur_ig', (req, res) => {
    res.render('curig', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/doc/hilih', (req, res) => {
    res.render('hilih', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

  router.get('/', (req, res) => {
    res.redirect('/beranda')
  })

  router.get('/about', (req, res) => {
    res.render('about', {host: process.env.S_HOST, title: "about | Online Api's Tools"})
  })

  router.get('/beranda', (req, res) => {
     res.render('index', {host: process.env.S_HOST, title: "ostech | Online Api's Tools"})
  })

module.exports = router
