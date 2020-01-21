class FakerGen {
  generate(country, callback) {
    if (country == 'id') {
      faker.locale = 'id_ID'
      console.log(password)
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'en') {
      faker.locale = 'en'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'az') {
      faker.locale = 'az'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'cz') {
      faker.locale = 'cz'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'fr') {
      faker.locale = 'fr'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'fa') {
      faker.locale = 'fa'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'es') {
      faker.locale = 'es'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'uk') {
      faker.locale = 'uk'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'tr') {
      faker.locale = 'tr'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'ja') {
      faker.locale = 'ja'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else if (country == 'ge') {
      faker.locale = 'ge'
      callback(undefined, {
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2019-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: password,
        email: faker.internet.email()
      })
    } else {
      callback({
        code: 422,
        message: 'code country not found.'
      }, undefined)
    }
  }
}

module.exports = { FakerGen }