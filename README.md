# express-hapi-graphql

A prototype of building a GraphQL server with Apollo Server wrapped with Express, Hapi and KOA


## dependencies
This project is written in TypeScript and as a result uses typings to import dependent type definitions.  Typings will be installed automatic as a post install step.  All tool dependencies are installed locally and can be used with npm run commands.

### building
A build must be executed before running the project:

```
npm run build
```

A build will be automatically executed when running the application with

```
npm run dev:express
```
or for HAPI
```
npm run dev:hapi
```
