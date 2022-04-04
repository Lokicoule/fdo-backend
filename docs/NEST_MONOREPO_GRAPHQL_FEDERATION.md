# Nest monorepo & graphql federation packages

## Generate apps & libs

```bash
$ nest new fdo-gateway

$ nest generate app fdo-customers-application
$ nest generate app fdo-products-application
$ nest generate app fdo-orders-application

$ nest generate library fdo-core
```

---

## Install graphql packages

```bash
$ npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express

$ npm i @apollo/federation @apollo/gateway

$ npm i @apollo/subgraph
```

---

## Running the app

- Services :

```bash
$ npm start fdo-customers-application
$ npm start fdo-orders-application
$ npm start fdo-products-application
```

- Gateway : services should be deployed.

```bash
$ npm start
```
