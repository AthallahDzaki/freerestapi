const { fetchText } = require('../include/fetcher')

module.exports = shortener = (url) => new Promise((resolve, reject) => {
    fetchText(`https://tinyurl.com/api-create.php?url=${url}`)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})
