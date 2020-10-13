const faker = require('faker')

const Faker = (country) => new Promise((resolve, reject) => {
    if (!country) { reject('country code not found.') }
    faker.locale = country

    resolve({
        code: 200,
        message: 'success',
        name: faker.name.findName(),
        birthday: faker.date.between('1995-12-01', '2020-12-30'),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode(),
        phone_number: faker.phone.phoneNumber(),
        username: faker.name.findName().trim(),
        password: faker.internet.password(),
        email: faker.internet.email()
    })
})

module.exports = Faker

