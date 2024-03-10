function generateUsers(request, state, logger) {
    const { faker, fa } = require('@faker-js/faker');

    const firstName = faker.person.firstName;
    const lastName = faker.person.lastName;
    const data = {
        userId: faker.finance.accountNumber(5),
        username: `${firstName}.${lastName}`,
        email: faker.internet.email({firstName: firstName, lastName: lastName, provider: 'example.com'}),
        password: faker.internet.password(),
        birthDate: faker.date.birthdate()
    };

    const users = faker.helpers.multiple(data, { count: 5 });

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": users
    };
}