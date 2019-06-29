# Welcome to sangue-api 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/dygufa/sangue-api#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/dygufa/sangue-api/graphs/commit-activity)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://github.com/dygufa/sangue-api/blob/master/LICENSE)

### 🏠 [Homepage](https://github.com/dygufa/sangue-api#readme)

## How to run

1) Initialize a mongodb instance:
`docker run --name some-mongo -d mongo:tag`

2) Install `ts-node`:
`npm i -g ts-node`

3) Run the app
`ts-node index.ts`

## Endpoints

URL | Body (POST) | Success Response |
--- | --- | ---
GET /products | - | Product[]
GET /products/:id | - | Product
POST /vouchers/ | Voucher | Voucher

### Types

```

## Run tests

```sh
npm run test
```

## Author

* Github: [@dygufa](https://github.com/dygufa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/dygufa/sangue-api/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

This project is [ISC](https://github.com/dygufa/sangue-api/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_