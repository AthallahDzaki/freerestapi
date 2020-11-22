var express = require('express')
var router = express.Router()
require('dotenv').config()

var title = "Free Rest API | Online API's Tools";

  router.get('/doc/hash_identifier', (req, res) => {
    res.render('hash_ident', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/covid19', (req, res) => {
    res.render('cv19', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/ph', (req, res) => {
	  res.render('ph', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/nhentai', (req, res) => {
	  res.render('nhentai', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/randomh', (req, res) => {
	  res.render('randomh', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/randomp', (req, res) => {
	  res.render('randomp', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/tiktok', (req, res) => {
	res.render('tiktok',  {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/dicoding', (req, res) => {
    res.render('dicoding', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/nekopoi', (req, res) => {
	  res.render('nekopoi', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/tokped', (req, res) => {
    res.render('tokped', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/spam_wa', (req, res) => {
    res.render('spam_wa', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/proxy', (req, res) => {
    res.render('proxy', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/iplookup', (req, res) => {
    res.render('iplookup', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/fakename', (req, res) => {
    res.render('fakename', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/http', (req, res) => {
    res.render('http', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/userwp', (req, res) => {
    res.render('userwp', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/base64', (req, res) => {
    res.render('base64', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/base32', (req, res) => {
    res.render('base32', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/KBBI', (req, res) => {
    res.render('KBBI', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/ig', (req, res) => {
	  res.render('ig', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/cekresi', (req, res) => {
	  res.render('cekresi', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/gempa', (req, res) => {
	  res.render('gempa', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/ushort', (req, res) => {
    res.render('ushort', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/hash', (req, res) => {
    res.render('hash', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/movie', (req, res) => {
    res.render('movie', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/cur_ig', (req, res) => {
    res.render('curig', {host: process.env.S_HOST, title: title})
  })

  router.get('/doc/hilih', (req, res) => {
    res.render('hilih', {host: process.env.S_HOST, title: title})
  })

  router.get('/', (req, res) => {
    res.render('index', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/cuaca', (req, res) => {
	res.render('cuaca', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/nulis' , (req, res) => {
	res.render('nulis', {host: process.env.S_HOST, title: title})
  })
  
  router.get('/doc/yt', (req, res) => {
	  res.render('yt', {host: process.env.S_HOST, title: title});
  })
  
  router.get('/doc/lirik', (req, res) => {
	  res.render('lirik', {host: process.env.S_HOST, title: title});
  })

  router.get('/about', (req, res) => {
    res.render('about', {host: process.env.S_HOST, title: "about | Free Rest API"})
  })

module.exports = router
