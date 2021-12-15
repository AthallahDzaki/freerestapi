const express = require('express')
const router = express.Router()
require('dotenv').config()

const GetHostname = (req) => {
  let header = req.header('x-forwarded-proto');
  let result = (header ? req.header('x-forwarded-proto') + '://' : 'http://')+req.get("hostname")
  console.log(result);
  return ;
}

let title = "Free Rest API | Online API's Tools";

router.get('/doc/hash_identifier', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/hash_ident', {host: GetHostname(req), title: title})
})

router.get('/doc/covid19', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/cv19', {host: GetHostname(req), title: title})
})

router.get('/doc/ph', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/ph', {host: GetHostname(req), title: title})
})

router.get('/doc/nhentai', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/nhentai', {host: GetHostname(req), title: title})
})

router.get('/doc/randomh', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/randomh', {host: GetHostname(req), title: title})
})

router.get('/doc/randomp', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/randomp', {host: GetHostname(req), title: title})
})

router.get('/doc/tiktok', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/tiktok',  {host: GetHostname(req), title: title})
})

router.get('/doc/dicoding', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/dicoding', {host: GetHostname(req), title: title})
})

router.get('/doc/nekopoi', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/nekopoi', {host: GetHostname(req), title: title})
})

router.get('/doc/tokped', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/tokped', {host: GetHostname(req), title: title})
})

router.get('/doc/spam_wa', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/spam_wa', {host: GetHostname(req), title: title})
})

router.get('/doc/proxy', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/proxy', {host: GetHostname(req), title: title})
})

router.get('/doc/iplookup', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/iplookup', {host: GetHostname(req), title: title})
})

router.get('/doc/fakename', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/fakename', {host: GetHostname(req), title: title})
})

router.get('/doc/http', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/http', {host: GetHostname(req), title: title})
})

router.get('/doc/userwp', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/userwp', {host: GetHostname(req), title: title})
})

router.get('/doc/base64', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/base64', {host: GetHostname(req), title: title})
})

router.get('/doc/base32', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/base32', {host: GetHostname(req), title: title})
})

router.get('/doc/KBBI', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/KBBI', {host: GetHostname(req), title: title})
})

router.get('/doc/ig', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/ig', {host: GetHostname(req), title: title})
})

router.get('/doc/cekresi', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/cekresi', {host: GetHostname(req), title: title})
})

router.get('/doc/gempa', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/gempa', {host: GetHostname(req), title: title})
})

router.get('/doc/ushort', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/ushort', {host: GetHostname(req), title: title})
})

router.get('/doc/hash', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/hash', {host: GetHostname(req), title: title})
})

router.get('/doc/movie', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/movie', {host: GetHostname(req), title: title})
})

router.get('/doc/cur_ig', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/curig', {host: GetHostname(req), title: title})
})

router.get('/doc/hilih', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/hilih', {host: GetHostname(req), title: title})
})

router.get('/', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/index', {host: GetHostname(req), title: title})
})

router.get('/doc/cuaca', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/cuaca', {host: GetHostname(req), title: title})
})

router.get('/doc/nulis' , (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/nulis', {host: GetHostname(req), title: title})
})

router.get('/doc/yt', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/yt', {host: GetHostname(req), title: title});
})

router.get('/doc/igs', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/igs', {host: GetHostname(req), title: title});
})

router.get('/doc/fb', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/fb', {host: GetHostname(req), title: title});
})

router.get('/doc/lirik', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/lirik', {host: GetHostname(req), title: title});
})

router.get('/doc/ttscl', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/ttscl', {host: GetHostname(req), title: title});
})

router.get('/doc/filmapik', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/filmapik', {host: GetHostname(req), title: title})
})

router.get('/doc/crypto', (req, res) => {
  let header = req.header('x-forwarded-proto');
  res.render('docs/crypto', {host: GetHostname(req), title: title})
})

router.get('/about', (req, res) => {
  res.render('docs/about', {layout: false});
})

module.exports = router
