const axios = require("axios");

const FilmApik = (mode, data) => new Promise((resolve, reject) => {
	if(!mode || mode == undefined) return reject("Bejat");
	let url = 'https://api-filmapik-freerestapi.herokuapp.com/';
	let err;
	switch(mode)
	{
		case 'search':
		{
			if(!data || data == undefined) err = 1;
			url += 'search?q='+data;
			break;
		}
		case 'latest':
		{
			url += 'latest';
			break;
		}
		case 'country':
		{
			if(!data || data == undefined) err = 1;
			url += 'country?search='+data;
			break;
		}
		case 'category':
		{
			if(!data || data == undefined) err = 1;
			url += 'category?search='+data;
			break;
		}
	}
	if(err == 1) reject({
        code: 400,
        message: 'input parameter mode.'
    });
	axios.get(url).then(res => resolve(res.data)).catch(err => reject(err));
})

module.exports = FilmApik