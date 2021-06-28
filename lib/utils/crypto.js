const axios = require('axios');

const Crypto = (mode) => new Promise((resolve, reject) => {
	var headers = {
		'X-CMC_PRO_API_KEY': '73fd703c-6dc1-44c7-88be-bf0178d900e9',
		'Accept': 'application/json'
	};
	
	const options = {
		method: 'GET',
		headers: {
			'X-CMC_PRO_API_KEY': process.env.CMCTOKEN,
			'Accept': 'application/json'
		},
		url : 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=IDR'
	};
	
	axios(options).then(res => {
		if(res.status != 200) return reject({
			error : res.status,
			message : res.data.error_message
		});
		resolve({
			status : res.data.status.error_code == 0 ? '200' : res.data.status.error_code,
			data : res.data.data
		});
	})
})

module.exports = Crypto;