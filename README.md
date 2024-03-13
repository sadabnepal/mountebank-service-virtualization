# service virtualization using mountebank

### getting started
```
git clone https://github.com/sadabnepal/mountebank-service-virtualization.git
cd mountebank-service-virtualization
```

### pre-requisite
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)

### install package
```
npm install
```

### start stub
```
npm start
```

### stub details
The project is using [mountebank](http://www.mbtest.org) as a service virtualization tool, which provides following endpoints 

`GET: /api/users/<id>` fetches the user information by `user id` with response code: `200` <br>
`GET: /api/users?page=<number>` fetches the users information by `page number` with response code: `200` <br>
`POST: /api/users` creates the record with body information passed with response code: `201`<br>
Sample payload:
```
{
    "name": "sadab",
    "job": "tester"
}
```

`PUT: /api/users/<id>` updates the users information by `user id` with response code: `200` <br>
Sample payload:
```
{
    "name": "saqib",
    "job": "lead tester"
}
```

`POST: /api/register` register user information with response code: `200` or `400` <br>
Sample payload:
```
{
    "email": "test@test.com",
    "password": "test@123"
}
```
Note: missing field error will appear in case either of the above key is missing in payload. <br> <br>

default response for all other endpoints will be empty object `{}` with response code: `404`