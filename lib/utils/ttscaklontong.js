const scrapy = require('node-scrapy')
const fetch = require("node-fetch");
let lvl = Math.floor(Math.random() * 421) + 1;
const url = 'https://gameanswers.net/tts-lontong/level-'+lvl;
const TTSCL = () => new Promise((resolve, reject) => {
	try{
		var  model = {
			soal: 'p.alert-green strong',
			jawaban: 'p.alert-danger strong',
		}
		fetch(url)
			.then((res) => res.text())
			.then((body) => {
				var logs = scrapy.extract(body, model);
				resolve({
					soal : logs.soal,
					jawaban : logs.jawaban
				})
			})
	} catch(err){
		reject(err)
	}
})

module.exports = TTSCL;