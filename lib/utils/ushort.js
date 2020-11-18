const fetch = require('node-fetch')

module.exports = shortener = (url) => new Promise((resolve, reject) => {
    fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})
