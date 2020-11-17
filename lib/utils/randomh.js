const fetch = require('node-fetch')
async function Random() {
    let c;
	let url = [
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/artificial-images_hentai/reddit_sub_HENTAI_GIF/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/artificial-images_hentai/reddit_sub_hentaivids/urls.txt/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/body-parts_upper-body_breasts_large/reddit_sub_hugeboobs/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/artificial-images_hentai/reddit_sub_OppaiLove/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/artificial-images_hentai/reddit_sub_HQHentai/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/artificial-images_photoshop/reddit_sub_BreastExpansion/urls.txt'			
	]
    let a = url[Math.floor(Math.random() * url.length)]
    await fetch(a).then(res => res.text()).then(body => {
            let b = body.split("\n")
            c = b[Math.floor(Math.random() * b.length)]
        });
    return c;
}

const RandomH = () => new Promise((resolve, reject) => {
    Random().then(url => {
		resolve({
			url
		})
	}).catch(err => { reject(err) })
})

module.exports = RandomH
