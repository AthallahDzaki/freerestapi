const needle = require('needle')
const uploader = require('anonfile-lib')
const scraper = require('./scraper')
const ytb = require('youtube-dl');

const url = 'ytdl-freerestapi.herokuapp.com/?id='

const Youtube = (link) => new Promise((resolve, reject) => {
    needle(url + link, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
		else
		{
			url = '128.199.136.3/?id='
			needle(url + link, (err, resp, body) => {
				if (!err) {
					resolve(body)
				}
			}
		}
    })
})

module.exports = Youtube
