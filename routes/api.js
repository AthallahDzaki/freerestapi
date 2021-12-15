const express = require('express')
const router  = express.Router()

const count = require('countapi-js');

const {
    Base,
    Spam,
    Proxy,
    Hilih,
    Faker,
    Nulis,
    WPUser,
    Corona,
    Headers,
    HashGen,
    Dicoding,
    IpLookup,
    hashIdent,
	Tiktok,
	KBBI,
	Lirik,
	Pornhub,
//	Xnxx,
	RandomP,
	RandomH,
	Nhentai,
	Ushort,
	IG,
	Cekresi,
	Gempa,
	Covid19,
	Cuaca,
	Nekopoi,
	IGStalk,
	TTSCL,
	GH,
	FilmApik,
	ytDownlodMp3,
	ytDownlodMp4,
	Crypto,
	Brainly
} = require('./../lib')

function IncreaseCount(){
	count.hit('freerestapi.herokuapp.com', 'apiusage').then((result) => { 
		console.log(result);
	});
}

router.get('/', (req, res) => {
	IncreaseCount();
	res,send({
		code: 200,
		message: "Api Is WORKING"
	});
})

router.get('/hash-identifier', (req, res) => {
	IncreaseCount();
    const hash = req.query.hash
    if (!hash) {
        res.send({
            code: 403,
            message: 'Paramater email wajib diisi.'
        })
    } else {
        const main = new hashIdent()
        main.index(hash, (error, {hash_type, bit_length, char_length, char_type} = {}) => {
            res.send({
                hash: hash,
                hash_type: hash_type,
                bit_length: bit_length,
                char_length: char_length,
                char_type: char_type
            })
        })
    }
})

router.get('/dicoding', (req, res) => {
	IncreaseCount();
    const email = req.query.email
    if (!email) {
        res.send({
            code: 403,
            message: 'Paramater email wajib diisi.'
        })
    } else {
        Dicoding(email)
            .then(data => {
                res.send({
                    email: email,
                    data
                })
            })
    }
})

router.get('/corona', (req, res) => {
	IncreaseCount();
    Corona()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/nekopoi', (req, res) => {
	IncreaseCount();
	Nekopoi()
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/cuaca', (req, res) => {
	IncreaseCount();
	var lokasi = req.query.p;
	if(!lokasi || lokasi == undefined)
		return res.send({
			code:400,
			message:"p not found"
		})
	Cuaca(lokasi)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/spam', (req, res) => {
	IncreaseCount();
    const key   = req.query.key
    const no    = req.query.no
    if (!no || !key) {
        res.send({
            code: 403,
            message: 'Input parameter url and api key.'
        })
    } else {
        Spam(no, key)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/kbbi', (req, res) => {
	IncreaseCount();
	const kata = req.query.text
	if(!kata || kata == undefined)
	  return res.status(200).send({code: 200,message: 'Masukkan Parameter kata.'})
	KBBI(kata)
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/lirik', (req, res) => {
	IncreaseCount();
	const l = req.query.l || req.query.lagu || req.query.musik
	if(!l || l == undefined)
	  return res.status(200).send({
        code: 200,
        message: 'Pleasee input parameter lagu.'
      })
	Lirik(l)
			.then(data => {
				res.send(data);
			})
			.catch(err  => {
				res.send(err);
			})
})
/*
router.get('/brainly', (req, res) => {
	var ask = req.query.ask || req.query.a || req.query.p;
	var c   = req.query.c || req.query.count || req.query.j;
	if(!ask || ask == undefined || !c || c == undefined)
		return res.status(200).send({
			code:200,
			message:"Please input parameter a and c";
		})
	Brainly(ask, c)
				.then(data => {
					res.send(data)
				})
				.catch(err => {
					res.send(err);
				})
})*/

router.get('/covid', (req, res) => {
	IncreaseCount();
	var la = req.query.la;
	var lo = req.query.lo;
	if( !la || !lo || la == undefined || lo == undefined)
		return res.status(200).send({
			code:200,
			message:"Please input parameter la and lo"
		})
	Covid19(la, lo)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.send(err);
				})
})

router.get('/ig', (req, res) => {
	IncreaseCount();
	var url = req.query.url || req.query.link;
	if(!url || url == undefined)
		return res.status(200).send({
			code:200,
			message:"Please input the url params"
		})
	IG(url).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err)
	})
})

router.get('/igs', (req, res) => {
	IncreaseCount();
	var url = req.query.u || req.query.username;
	if(!url || url == undefined)
		return res.status(200).send({
			code:200,
			message:"Please input the username params"
		})
	IGStalk(url).then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err)
	})
})

router.get('/gempa', (req, res) => {
	IncreaseCount();
	Gempa().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
})

router.get('/iplookup', (req, res) => {
	IncreaseCount();
    const q = req.query.q
    if (!q) {
      res.status(200).send({
        code: 200,
        message: 'Pleasee input parameter url.'
      })
    } else {
        IpLookup(q)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/fakename', (req, res) => {
	IncreaseCount();
    const country = req.query.country
    if (!country) {
      res.status(500).send({code: 500, message: "Pleasee input code country."})
    } else {
        Faker(country)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/randomp', (req, res) => {
	IncreaseCount();
	RandomP()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/proxy', (req, res) => {
	IncreaseCount();
    Proxy()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/http-headers', (req, res) => {
	IncreaseCount();
    const q = req.query.q
    if (!q) {
      res.status(500).send({
        code: 500,
        message: 'required parameter q.'
      })
    } else {
        Headers(q)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/nhentai', (req, res) => {
	IncreaseCount();
	let d = req.query.d;
	if(!d || d == undefined)
		return res.status(500).send({
			code: 500,
			message: "Require Parameter d"
		})
	Nhentai(d)
			 .then(url => {
				 res.send(url);
			 })
			 .catch(err => {
				 res.send(err);
			 })
})

router.get('/randomh', (req, res) => {
	IncreaseCount();
	RandomH()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/userwp', (req, res) => {
	IncreaseCount();
    const q = req.query.q
    if (!q) {
      res.status(500).send({
        code: 500,
        message: 'Pleasee input parameter q.'
      })
    } else {
        WPUser(q)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/base64', (req, res) => {
	IncreaseCount();
    const encode = req.query.encode
    const decode = req.query.decode
    if (!encode && !decode) {
      res.status(500).send({
        code: 500,
        message: 'Failed, Pleasee input parameter.'
      })
    } else if (encode) {
        Base('b64enc', encode)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    } else if (decode) {
        Base('b64dec', decode)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/base32', (req, res) => {
	IncreaseCount();
    const encode = req.query.encode
    const decode = req.query.decode
    if (!encode && !decode) {
      res.status(500).send({
        code: 500,
        message: 'Failed, Pleasee input parameter.'
      })
    } else if (encode) {
        Base('b32enc', encode)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    } else if (decode) {
        Base('b32dec', decode)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/sha1', (req, res) => {
	IncreaseCount();
    const str  = req.query.str
    if (!str) {
      res.send({
        code: 404,
        message: 'Pleasee input parameter str.'
      })
    } else {
        HashGen('sha1', str)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/sha256', (req, res) => {
	IncreaseCount();
    const str  = req.query.str
    if (!str) {
      res.send({
        code: 404,
        message: 'Pleasee input parameter str.'
      })
    } else {
        HashGen('sha256', str)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/sha512', (req, res) => {
	IncreaseCount();
    const str  = req.query.str
    if (!str) {
      res.send({
        code: 404,
        message: 'Pleasee input parameter str.'
      })
    } else {
        HashGen('sha512', str)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/cekresi', (req, res) => {
	IncreaseCount();
	var ekspedisi = req.query.eks;
	var no = req.query.no;
	if(!ekspedisi || ekspedisi == undefined)
		return res.send({
			code:400,
			message: 'eks params not found'
		})
	if(!no || no == undefined)
		return res.send({
			code:400,
			message: "no params not found"
		})
	Cekresi(ekspedisi, no)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.send(err)
				})
})


router.get('/hilih', (req, res) => {
	IncreaseCount();
    const kata = req.query.kata
    if (!kata) {
      res.send({
        code: 400,
        message: 'Pleasee input parameter kata.'
      })
    } else {
        Hilih(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/nulis', (req, res) => {
	IncreaseCount();
    const kata = req.query.kata
    if (!kata) {
      res.send({
        code: 400,
        message: 'Pleasee input parameter kata.'
      })
    } else {
        Nulis(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/ytmp3', (req, res) => {
	IncreaseCount();
	var url = req.query.url;
	if(!url || url == undefined) 
	return response.send(
	{
		code:400,
		message:'Input parameter url'
	});
	ytDownlodMp3(url)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.send(err);
				})
})

router.get('/ph', (req, res) => {
	IncreaseCount();
	const link = req.query.l || req.query.link
	const pixel = req.query.p
	if(!link || link == undefined)
		return res.send({
            code: 200,
            message: 'Input parameter link / l.'
        })
	if(!p || p == undefined)
		return res.send({
            code: 200,
            message: 'Input parameter p (Valid PIXEL 240P, 480P, 720P).'
        })
	Pornhub(link, pixel)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.send('400\nInternal Server Error');
				})
})

router.get('/ushort', (req, res) => {
	IncreaseCount();
	const url = req.query.url || req.query.link;
	if(!url || url == undefined)
	return res.send({
        code: 400,
        message: 'input parameter url atau link.'
	})
	Ushort(url)
			.then(ress => {
				res.send(ress)
			})
			.catch(err => {
				res.send(err)
			})
})

router.get('/ytmp4', async (req, res) => {
	IncreaseCount();
	const url = req.query.url;
	if(!url || url == undefined)
	return res.send({
        code: 400,
        message: 'input parameter url.'
    })
	ytDownlodMp4(url)
					.then(data => {
						res.send(data);
					})
					.catch(err => {
						res.send(err);
					})
})

router.get('/tiktok', (req, res) => {
	IncreaseCount();
	const url = req.query.url || req.query.link;
	let nowm = req.query.nowm;
	if(!url || url == undefined)
	return res.send({
        code: 400,
        message: 'input parameter url atau link.'
    })
	if(!nowm || nowm == undefined || (nowm != 0 && nowm != 1))
		nowm = 0
	Tiktok(url, nowm)
			.then(data => {
				res.send(data)
			})
			.catch(err => {
				res.send(err)
			})
})


router.get('/ttscl', (req, res) => {
	IncreaseCount();
	TTSCL()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.send(err);
		})
})

router.get('/github', (req, res) => {
	IncreaseCount();
	const data = req.query.data;
	const type = req.query.type;
	if(!data || data == undefined)
	return res.send({
        code: 400,
        message: 'input parameter data.'
    })
	if(!type || type == undefined)
	return res.send({
        code: 400,
        message: 'input parameter type.'
    })
	GH(data, type)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.send(err);
		})
})

router.get('/filmapik', (req, res) => {
	IncreaseCount();
	const mode = req.query.mode;
	const data = req.query.data;
	if(!mode || mode == undefined)
	return res.send({
        code: 400,
        message: 'input parameter mode.'
    })
	FilmApik(mode, data)
			.then(data => {
				res.send(data)
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/crypto', (req, res) => {
	IncreaseCount();
	Crypto()
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/brainly', (req, res) => {
	const question = req.query.question;
	if(!question || question == undefined)
	return res.send({
        code: 400,
        message: 'input parameter question.'
    })
	Brainly(question)
					.then(data => {
						res.send(data);
					})
					.catch(err => {
						res.send(err);
					})
})

module.exports = router
