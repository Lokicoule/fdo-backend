# fdo-backend-microservice

## GATEWAY

- nest new fdo-gateway

Packages :

> - npm i @apollo/gateway @nestjs/apollo @nestjs/graphql apollo-server-express graphql

> - npm i @nestjs/config

## MICRO-SERVICES

nest generate app fdo-customers-application
nest generate app fdo-products-application
nest generate app fdo-orders-application

Packages :

> -npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express

> -npm i @apollo/federation @apollo/gateway

> -npm i @apollo/subgraph

## Library

nest generate library fdo-core
