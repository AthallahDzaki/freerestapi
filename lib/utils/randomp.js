const fetch = require('node-fetch')
async function Random() {
    let c;
	let url = [
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/age_milf/urls_age_milf.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/body-parts_upper-body_breasts_large/reddit_sub_bigboobs/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/body-parts_upper-body_breasts_large/reddit_sub_hugeboobs/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/general-categories/reddit_sub_NSFW_PORN_ONLY/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/sex_orgasm/reddit_sub_Womenorgasm/urls.txt',
			'https://raw.githubusercontent.com/EBazarov/nsfw_data_source_urls/master/raw_data/sex_orgasm/reddit_sub_Orgasms/urls.txt'
			
	]
    let a = url[Math.floor(Math.random() * url.length)]
    await fetch(a).then(res => res.text()).then(body => {
            let b = body.split("\n")
            c = b[Math.floor(Math.random() * b.length)]
        });
    return c;
}

const RandomP = () => new Promise((resolve, reject) => {
    Random().then(url => {
		resolve({
			url
		})
	})
})

module.exports = RandomP
