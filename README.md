# Welcome to vidare-api 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/dygufa/vidare-api#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/dygufa/vidare-api/graphs/commit-activity)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://github.com/dygufa/vidare-api/blob/master/LICENSE)

### 🏠 [Homepage](https://github.com/dygufa/vidare-api#readme)

## How to run

1) Initialize a mongodb instance:
`docker run --name mongo -e MONGO_INITDB_DATABASE=myapp -e MONGO_INITDB_ROOT_USERNAME=<USER> -e MONGO_INITDB_ROOT_PASSWORD=<PASSWORD> -d mongo`

2) Install `ts-node`:
`npm i -g ts-node`

3) Define .env based on .env.example

4) Run the app
`ts-node src/index.ts`

## Endpoints

URL | Body (POST) | Success Response | Auth*
--- | --- | --- | ---
GET /login | NewUser | LoginResponse | Not required
GET /products | - | Product[] | Required
GET /products/:id | - | Product | Required
GET /vouchers/ | - | Voucher[] | Required
POST /vouchers/ | NewVoucher | Voucher | Required
GET /bloodDonations/ | - | BloodDonation[] | Required
POST /bloodDonations/ | NewBloodDonation | BloodDonation | Required
POST /redeem/ | { code: string } | boolean | Not required

Endpoints that requires authentication must receive an `Authorization` header in the following format:
`Authorization: Bearer <JWT TOKEN RECEIVED ON LOGIN RESPONSE>`

### Types

```
type NewUser {
    email: string
    familyName: string
    givenName: string
    googleId: string
    imageUrl: string
    name: string
}

type User {
    _id: string
    name: string
    imageUrl: string
    email: string
    bloodType: string?
    level: number
    createdAt: Date
}

type LoginResponse {
    user: User
    token: string
}

type Company {
    name: string
}

type Product {
    _id: string
    name: string
    discount: number
    imageUrl: string
    company: Company
    price: number
}

type Voucher {
    _id: string
    product: Product
    expiresAt: Date
    code: string
}

type NewVoucher {
    productId: string
}

type BloodDonation {
    _id: string
    imageUrl: string
    verified: bool
    createdAt: Date
}

type NewBloodDonation {
    image: string // base64
}
```

## Run tests

```sh
npm run test
```

## Author

* Github: [@dygufa](https://github.com/dygufa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/dygufa/vidare-api/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

This project is [ISC](https://github.com/dygufa/vidare-api/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_