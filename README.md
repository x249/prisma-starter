# 🌠 Prisma Starter

GraphQL API w/ TypeScript + Prisma

> Contributions are welcomed! Just fork and submit a PR

## About

It took me a while to find a way to implement type-safety, ORM tooling and GraphQL together in a backend. After discovering that [Prisma](https://www.prisma.io/) exists, I found that it was incredibly easy and intuitive to setup.

## Structure

Two folders are there by default; prisma & src. In the prisma folder, you'll find all your needs for the datamodel of the db engine and the prisma configuration file. The src folder contains the main entry and schema files, resolvers and generated files from the prisma datamodel.

## Requirements

* Docker >= 19.03.1
* Docker Compose >= 1.24.0
* TypeScript >= 3.3.4
* Node >= 11.15.0
* Images:
	* prismagraphql/prisma:1.34
	* postgres

## Startup

```bash

$ docker-compose -d up # Download images and start them

$ prisma deploy # Deploy the db schema generated from the datamodel

$ npm run dev # Development @ localhost:4000

$ npm run build # Build TS -> ./dist

```

## Environment Variables

Example of what your variables should look like:

```bash

PRISMA_ENDPOINT="http://localhost:4466"
PRISMA_SECRET="PRISMA_SECRET_HERE"
APP_SECRET="APP_SECRET_HERE"
PRISMA_MANAGEMENT_API_SECRET="MGMT_SECRET_HERE" # OPTIONAL

```

## License

MIT &copy; Osama Adil
