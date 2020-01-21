/**
  cli project hilih by ostech

const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const convert = (str) => {
  return(str.replace(lower, 'i').replace(upper, 'i'))
}

console.log(convert('aku sayang kamu banget njir AKU sAyang KamU'))

*/

const lower = /[aiueo]/g
const upper = /[AIUEO]/g

class Hilih {
  kintil(str, callback) {
    const hasil = str.replace(lower, 'i').replace(upper, 'I')
     return callback(undefined, {
      code: 200,
      result: hasil
     })
    //)
  }
}

module.exports = { Hilih }
