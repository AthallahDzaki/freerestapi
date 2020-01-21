const key     = ['ROv2FnrQcaKZ', 'VtwWmMZU4AJM']
const keys    = key[Math.floor(Math.random() * key.length)]
const apim    = ['jIPQfBjAULJBmxno43EMMlIJlLwIuIm07fYK3o3CTM9Q25SmL2iED6CBlgkirYE2',
                 'ZXdsnmEd3sEjurpe1ii49WF4ARbGuGFmryqYFzV2nU4TOj1kt66VTki3EIzh3YBW',
                 'nGBP4sHzWTIyRnHswa2SeX5pEmHUXDryQfAOmXokeKm8xZtebEWraj85F9Wtpf8w',
                 'plR95uI0JJGAjgJZj4GBCrv5DUHF7cyujPHRNqXsoep9kar8xBCECQYFKzn8DOQF']

const apim_   = apim[Math.floor(Math.random() * apim.length)]

const config = {
  iplookup: {
    BASE_URL: 'http://ip-api.com/json/'
  },
  proxy: {
    BASE_URL: 'https://api.getproxylist.com/proxy'
  },
  ip: {
   BASE_URL: 'https://api.myip.com'
  },
  short: {
    BASE_URL: 'http://stech.best/u/api/?key='+keys+'&url='
  },
  movie: {
    BASE_URL: 'https://ducky-database-movies-api.herokuapp.com/api/movies?key_token='+apim_+'&search='
  },
  spam: {
    BASE_URL: 'https://core.ktbs.io/v2/user/registration/otp/'
  }
}

module.exports = config
