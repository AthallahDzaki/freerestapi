const fetch = require('node-fetch');

const Nulis = (text) => new Promise((resolve, reject) => {
    let url = 'http://freerestapi2-backend-py.herokuapp.com/nulis?text='
    if (text === 'undefined') { reject('masukan text nya kak.') }
    if (text.indexOf('#') > -1) { text.replace(/\#/g, '')}
    var hasil = 0;
    fetch(url+text).then(res => res.text()).then(body => {
         resolve(body);
		 hasil = 1;
    });
	if(hasil == 0)
		reject({Error: 400});
})

module.exports = Nulis
