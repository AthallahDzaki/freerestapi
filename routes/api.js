const express = require('express')
const router  = express.Router()

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
	Youtube,
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
	Member
} = require('./../lib')

router.get('/', (req, res) => {
	res,send({
		code: 200,
		message: "Api Is WORKING"
	});
})

router.get('/hash-identifier', (req, res) => {
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
    Corona()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/nekopoi', (req, res) => {
	var url = req.query.url;
	if(!url || url == undefined)
		return res.send({
			code:400,
			message:"URL Not Provided"
		})
	Nekopoi(url)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.send(err);
				})
})

router.get('/cuaca', (req, res) => {
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

router.get('/covid', (req, res) => {
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

router.get('/gempa', (req, res) => {
	Gempa().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
})

router.get('/iplookup', (req, res) => {
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
	RandomP()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/proxy', (req, res) => {
    Proxy()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/http-headers', (req, res) => {
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
	let d = req.query.d;
	if(!d || d == undefined)
		return res.status(500).send({
			code: 500,
			message: "Require Parameter d"
		})
	Nhentai(d)
			 .then(url => {
				 send.res(url);
			 })
			 .catch(err => {
				 send.res(err);
			 })
})

router.get('/randomh', (req, res) => {
	RandomH()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

router.get('/userwp', (req, res) => {
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

router.get('/5122', (req, res) => {
	Member().then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err);
	})
})


router.get('/hilih', (req, res) => {
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

router.get('/yt2', (req, res) => {
	var id = req.query.url || req.query.link;
	if(!id || id == undefined) 
        return response.send(
		{
			code:400,
			message:'Input ID Or Link of Video'
		});
    if(id.includes("youtube")){
		urls = id;
		var r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    	r = urls.match(rx);
		id = r[1];
    }
	res.header('Content-Disposition', `attachment; filename="audio.mp3"`);
	ytdl(id, {
      format: 'mp3',
      filter: 'audioonly'
     }).pipe(res);
})

router.get('/ph', (req, res) => {
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

router.get('/yt', (req, res) => {
	const url = req.query.url || req.query.link;
	if(!url || url == undefined)
	return res.send({
        code: 400,
        message: 'input parameter url atau link.'
    })
	Youtube(url)
			.then(data => {
				res.send(data);
			})
			.catch(err => {res.send(err)})
})

router.get('/tiktok', (req, res) => {
	const url = req.query.url || req.query.link;
	if(!url || url == undefined)
	return res.send({
        code: 400,
        message: 'input parameter url atau link.'
    })
	Tiktok(url)
			.then(data => {
				res.send(data)
			})
			.catch(err => {
				res.send(err)
			})
})

module.exports = router
