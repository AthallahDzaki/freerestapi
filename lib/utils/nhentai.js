const nhentai = require('nhentai');
const api = new nhentai.API();

const Nhentai = (doujin) => new Promise((resolve, reject) => {
    if(!doujin) { reject('Doujin Not Found')}
    api.fetchDoujin(doujin).then(doujin => {
		var i = 0, pages= "", ar;
		while(i < doujin.pages.length)
		{
			if(i < doujin.pages.length - 1)
					pages += doujin.pages[i].url+",.", i++
			else
					pages += doujin.pages[i].url, i++
		}
		ar = pages.split(',.');
		resolve({
			title:  doujin.titles.pretty,
			cover:  doujin.cover.url,
			pages:  ar
		})
    }).catch(err => {reject(err)});
})

module.exports = Nhentai