//KBBI
const scrapy = require('node-scrapy')
const fetch = require("node-fetch");
const url = 'https://kbbi.kemdikbud.go.id/entri/'
const model = {
  lema: 'h2',
  arti: ['ol li', 'ul.adjusted-par']
}
const KBBI = (kata) => new Promise((resolve, reject) => {
	try{
		var  model = {
			lema: 'h2',
			arti: ['ol li', 'ul.adjusted-par']
		}

		fetch(url + encodeURIComponent(kata))
			.then((res) => res.text())
			.then((body) => {
				var log = scrapy.extract(body, model)
				if(log.arti == null){
					model = {
						lema: 'h2',
						arti: ['ul.adjusted-par']
					}
					fetch(url + encodeURIComponent(kata))
						.then((res) => res.text())
						.then((body) => {
							log = scrapy.extract(body, model)
							if(log.arti != null)
								console.log(JSON.stringify(log))
							else
								console.log("Arti Tidak Ada");
						})
				}
				else
					console.log(JSON.stringify(log));
			})
	} catch(err){
		reject(err)
	}
})

module.exports = KBBI