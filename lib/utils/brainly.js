const Brainly = require('brainly-scraper-v2')
const brain = new Brainly("id")

/**
 * Get Brainly Answer
 *
 * @param {string} question - Pertanyaan
 */
 module.exports = cekResi = (question) => new Promise((resolve, reject) => {
    brain.search("id", text).then(async res => {
        console.log(res);
        let br = await JSON.stringify(res)
        let json = await JSON.parse(br)
        resolve(json)
    })
})