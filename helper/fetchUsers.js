const { writeFileSync } = require('fs');

fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((response) =>
        writeFileSync('./response/users.json', JSON.stringify(response.data, 0, 4), { encoding: 'utf-8' }))
    .catch((err) => console.log('error occurred', err));