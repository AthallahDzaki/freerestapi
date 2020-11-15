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
} = require('./../lib')

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

router.get('/iplookup', (req, res) => {
    const q = req.query.q
    if (!q) {
      res.status(200).send({
        code: 200,
        message: 'Pliese input parameter url.'
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
      res.status(500).send({code: 500, message: "Pliese input code country."})
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
        message: 'required parameter url.'
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

router.get('/userwp', (req, res) => {
    const q = req.query.q
    if (!q) {
      res.status(500).send({
        code: 500,
        message: 'Pliese input parameter url.'
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
        message: 'Failed, pliese input parameter.'
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
        message: 'Failed, pliese input parameter.'
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
        message: 'pliese input parameter url.'
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
        message: 'pliese input parameter url.'
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
        message: 'pliese input parameter url.'
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


router.get('/hilih', (req, res) => {
    const kata = req.query.kata
    if (!kata) {
      res.send({
        code: 400,
        message: 'pliese input parameter kata.'
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
        message: 'pliese input parameter kata.'
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

router.get('/tiktok', (req, res) => {
	const url = req.query.url || req.query.link;
	if(!url)
	return res.send({
        code: 400,
        message: 'pliese input parameter url atau link.'
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
