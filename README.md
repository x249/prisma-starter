# 🌠 Prisma Starter

GraphQL API w/ TypeScript + Prisma

> Contributions are welcomed! Just fork and submit a PR

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
