const needle = require('needle');

const Nulis = (text) => new Promise((resolve, reject) => {
    let url = 'http://freerestapi2-backend-py.herokuapp.com/nulis?text='
    if (typeof text === 'undefined') { reject('masukan text nya kak.') }
    if (text.indexOf('#') > -1) { text.replace(/\#/g, '')}

    needle(url + text, (err, resp, body) => {
		if(resp)
			resolve(
				body
			)
		else
			reject({
				Error: 400
			})
    })
})

module.exports = Nulis
