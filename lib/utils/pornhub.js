const pornhub = require('@justalk/pornhub-api');

async function Find(url) {
        const result = await pornhub.page(url, ['title','pornstars','download_urls']);
        return result;
}

const Pornhub = (link) => new Promise((resolve, reject) => {
    if (!link) { reject('Video not found.') }
    Find(link).then(data => {
		resolve({
			data
		})
	})
})

module.exports = Pornhub
